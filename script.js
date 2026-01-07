document.addEventListener('DOMContentLoaded', () => {
    const audioFileInput = document.getElementById('audio-file-input');
    const fileNameSpan = document.getElementById('file-name');
    const analyzeButton = document.getElementById('analyze-button');
    const resultSection = document.getElementById('result-section');
    const loader = document.getElementById('loader');
    const analysisResultDiv = document.getElementById('analysis-result');

    let selectedFile = null;

    // Initially disable the analyze button
    analyzeButton.disabled = true;

    audioFileInput.addEventListener('change', (event) => {
        selectedFile = event.target.files[0];
        if (selectedFile) {
            fileNameSpan.textContent = selectedFile.name;
            analyzeButton.disabled = false;
        } else {
            fileNameSpan.textContent = '선택된 파일 없음';
            analyzeButton.disabled = true;
        }
    });

    analyzeButton.addEventListener('click', () => {
        if (!selectedFile) {
            alert('분석할 오디오 파일을 먼저 선택해주세요.');
            return;
        }

        // Show the result section and loader
        resultSection.style.display = 'block';
        loader.style.display = 'block';
        analysisResultDiv.innerHTML = ''; // Clear previous results

        // --- AI 분석 로직 시뮬레이션 ---
        // 실제 AI 모델을 연동할 때는 이 부분을 수정합니다.
        // 예를 들어, FormData를 사용하여 서버로 파일을 전송하고 결과를 받아옵니다.
        console.log(`Analyzing file: ${selectedFile.name}`);
        console.log(`File size: ${selectedFile.size} bytes`);
        console.log(`File type: ${selectedFile.type}`);

        setTimeout(() => {
            // Hide loader
            loader.style.display = 'none';

            // Display placeholder result
            const placeholderResult = `
                파일 이름: ${selectedFile.name}
                파일 크기: ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                파일 종류: ${selectedFile.type}

                ------------------------------------
                AI 모델 분석 결과 (Placeholder)
                ------------------------------------
                - 감지된 주요 소리: [음악, 대화]
                - 분위기: [긍정적]
                - 음성 감지 확률: 95%

                * 이 결과는 실제 분석이 아니며, 나중에 실제 AI 모델의 출력으로 대체되어야 합니다.
            `;
            analysisResultDiv.textContent = placeholderResult;

        }, 2000); // Simulate a 2-second analysis time
    });
});
