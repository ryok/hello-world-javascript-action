const core = require('@actions/core');

try {
    //// pushだとgithub.context.payloadで実行結果を取れるんだけど
    //// gollumの場合は$GITHUB_EVENT_PATHの中身を持ってくる必要があった
    const event = JSON.parse(core.getInput('event'));
    if (event.pages) { // 最低限のチェックしかしていない
        const pages = event.pages;
        console.log(pages);
        for (const page of pages) {
            console.log(`${page.title}: ${page.html_url} (${page.action})`);
            //// 出力例
            // Home: https://github.com/ryok/hello-world-javascript-action/wiki/Home (edited)
            console.log(`${page.output}`);
        }
    }
} catch (error) {
    core.setFailed(error.message);
}
