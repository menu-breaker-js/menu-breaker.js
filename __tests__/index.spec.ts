// import $ from 'jquery';

import MenuBreaker from '../src/menu-breaker';

describe('MenuBreaker', () => {
    document.body.innerHTML = `
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    `

    it ('should', () => {
        const elem = document.querySelector('.desktop');

        const menuBreaker = new MenuBreaker({
            element: elem,
            // settings: {
            //     // options...
            // },
            // callbacks: {
            //     // callbacks...
            // }
        });
    })
})