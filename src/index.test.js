import { expect } from '@esm-bundle/chai';
import "./index.sly"

describe("index", () => {
    it('does the component has correct content', () => {
        const container = document.createElement("src-index");
        document.body.appendChild(container);

        expect(container.shadowRoot.textContent).to.eq("Welcome to the strictly website");

        container.remove();
    });
});
