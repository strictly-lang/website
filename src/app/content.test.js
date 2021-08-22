import { expect } from '@esm-bundle/chai';
import "./content.sly"

describe("index", () => {
    it('does the component has correct content', () => {
        const container = document.createElement("src-app-content");
        document.body.appendChild(container);

        expect(container.shadowRoot.textContent).to.eq("Welcome and make yourself comfortable");

        container.remove();
    });
});
