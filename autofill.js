// Get item from URL and fill the input
    const params = new URLSearchParams(window.location.search);
    const selectedItem = params.get('item');
    if (selectedItem) {
        document.getElementById('item').value = selectedItem;
    }