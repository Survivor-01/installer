// 更新当前时间
function updateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = now.toLocaleDateString('zh-CN', options);
    document.getElementById('current-time').textContent = timeString;
}

// 页面加载时立即更新时间
updateTime();

// 每秒更新一次时间
setInterval(updateTime, 1000);

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
