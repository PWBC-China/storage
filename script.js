function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;

    // 向服务器发送消息，请求发送状态
    // 这里使用了fetch API发送POST请求，你可以根据实际情况使用其他方法
    fetch('/send-message', {
        method: 'POST',
        body: JSON.stringify({ message: message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        var isSuccess = data.success;  // 假设从服务器返回的数据中有一个字段表示成功与否

        var messageStatus = document.getElementById('message-status');
        messageStatus.textContent = isSuccess ? '消息发送成功' : '消息发送失败';
        messageStatus.classList.toggle('hidden', false);

        if (isSuccess) {
            var successIcon = document.createElement('i');
            successIcon.classList.add('fas', 'fa-check', 'success-icon');
            messageStatus.appendChild(successIcon);
        }
    })
    .catch(error => {
        console.error('发送消息时出错:', error);
    });
}
