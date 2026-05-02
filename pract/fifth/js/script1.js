        var name = prompt('Введіть ім`я:', '');
        var position = prompt('Ким ви працюєте ?:', '');
        var phone = prompt('Введіть номер телефону:', '+38 (067) 000-00-00');

        if (!name) name = 'User Name';
        if (!position) position = 'Position';
        if (!phone) phone = 'Phone';
        
        const logoSrc = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

        const totalCards = 12 * 3;

        const gridContainer = document.getElementById('cardGrid');

        const phoneIconSvg = `
            <svg class="card-phone-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
        `;

        for (var i = 0; i < totalCards; i++) {
            const cardHtml = `
                <div class="card">
                    <img src="${logoSrc}" alt="Logo" class="card-logo">
                    <div class="card-details">
                        <div class="card-name">${name}</div>
                        <div class="card-position">${position}</div>
                        <div class="card-phone">
                            ${phoneIconSvg}
                            ${phone}
                        </div>
                    </div>
                </div>
            `;

            gridContainer.insertAdjacentHTML('beforeend', cardHtml);
        }