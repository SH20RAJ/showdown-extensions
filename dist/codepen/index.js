
export const codepenExtension = (md) => {
    md.renderer.rules.code_block = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const code = token.content.trim();
        const codepen = `<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="michaelcurrin" data-slug-hash="${code}" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`;
        return codepen;
    }

    return md;
}

