const colorSelector = document.getElementById('bg-color-selector');
colorSelector.addEventListener('change', function () {
    document.body.style.backgroundColor = this.value;
});
