<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Red Dot Follows Nose</title>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js"></script>
</head>
<body>
    <canvas id="outputCanvas"></canvas>
    <script>
        const videoElement = document.createElement('video');
        const canvasElement = document.getElementById('outputCanvas');
        const canvasCtx = canvasElement.getContext('2d');

        const faceMesh = new FaceMesh({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
            }
        });
        faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        async function fetchImage(url) {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.src = url;
            });
        }

        async function loadImages() {
            const images = [];
            for (let i = 0; i < 100; i++) {  // Adjust number of frames as needed
                const paddedIndex = String(i).padStart(2, '0');
                const img = await fetchImage(`img/seq_${paddedIndex}.png`);
                images.push(img);
            }
            return images;
        }

        async function main() {
            const images = await loadImages();
            let currentFrame = 0;
            const fps = 12;
            const interval = 1000 / fps;

            faceMesh.onResults(onResults);

            function onResults(results) {
                canvasElement.width = results.image.width;
                canvasElement.height = results.image.height;
                canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
                canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

                if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
                    const nose = results.multiFaceLandmarks[0][1]; // The landmark for the nose tip
                    canvasCtx.fillStyle = 'red';
                    canvasCtx.beginPath();
                    canvasCtx.arc(nose.x * canvasElement.width, nose.y * canvasElement.height, 5, 0, 2 * Math.PI);
                    canvasCtx.fill();
                }
            }

            function processFrame() {
                if (currentFrame >= images.length) currentFrame = 0;
                const image = images[currentFrame++];
                faceMesh.send({ image });
                setTimeout(processFrame, interval);
            }

            processFrame();
        }

        main();
    </script>
</body>
</html>
