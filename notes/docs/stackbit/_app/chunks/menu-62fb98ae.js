import { w as t } from './index-ab5856d2.js';
var e = t('');
function a(t, e, a) {
    return { title: t, path: '/docs' + (e ? '/' + e : ''), subMenu: a };
}
const s = [
    a('Introduction', ''),
    a('Quickstart', 'quickstart', [
        a('Deno', 'quickstart/deno'),
        a('Go', 'quickstart/go'),
        a('Java Spring', 'quickstart/java'),
        a('Node/TypeScript/Express', 'quickstart/typescript'),
        a('PHP Drupal', 'quickstart/drupal'),
        a('PHP Laravel', 'quickstart/laravel'),
        a('Python Django', 'quickstart/python'),
        a('Python Flask', 'quickstart/flask'),
        a('React', 'quickstart/react'),
        a('Ruby on Rails', 'quickstart/ruby-on-rails'),
        a('Rust', 'quickstart/rust'),
        a('Svelte', 'quickstart/svelte'),
        a('Datasette', 'quickstart/datasette'),
        a('Nix', 'quickstart/nix'),
        a('Haskell', 'quickstart/haskell'),
        a('C', 'quickstart/c'),
        a('Perl', 'quickstart/perl'),
        a('Julia', 'quickstart/julia'),
        a('Docker Compose', 'quickstart/docker-compose')
    ]),
    a('Getting Started', 'getting-started'),
    a('Configure', 'configure', [
        a('.gitpod.yml', 'config-gitpod-file'),
        a('Custom Docker Image', 'config-docker'),
        a('Start Tasks', 'config-start-tasks'),
        a('VS Code Extensions', 'vscode-extensions'),
        a('Exposing Ports', 'config-ports'),
        a('Prebuilds', 'prebuilds'),
        a('Environment Variables', 'environment-variables'),
        a('Checkout and Workspace Location', 'checkout-location')
    ]),
    a('Develop', 'develop', [
        a('One workspace per task', 'workspaces'),
        a('Life of a workspace', 'life-of-workspace'),
        a('Contexts', 'context-urls'),
        a('Collaboration & Sharing', 'sharing-and-collaboration'),
        a('Create a team', 'teams'),
        a('Local Companion', 'develop/local-companion')
    ]),
    a('Integrations', 'integrations', [
        a('GitLab', 'gitlab-integration'),
        a('GitHub', 'github-integration'),
        a('Bitbucket', 'bitbucket-integration'),
        a('JetBrains', 'integrations/jetbrains'),
        a('Browser Bookmarklet', 'browser-bookmarklet'),
        a('Browser Extension', 'browser-extension')
    ]),
    a('Gitpod Self-Hosted', 'self-hosted/latest', [
        a('Installation', 'self-hosted/latest/installation'),
        a('Configuration', 'self-hosted/latest/configuration'),
        a('Administration', 'self-hosted/latest/administration'),
        a('Troubleshooting', 'self-hosted/latest/troubleshooting'),
        a('Updating', 'self-hosted/latest/updating'),
        a('Releases', 'self-hosted/latest/releases')
    ]),
    a('References', 'references', [
        a('.gitpod.yml', 'references/gitpod-yml'),
        a('Command Line Interface', 'command-line-interface'),
        a('Languages & Framework', 'languages-and-frameworks'),
        a('Roadmap', 'references/roadmap')
    ])
];
function o(t, e = s, a = {}) {
    for (const s of e) {
        if (a.next) return a;
        if (a.thisEntry) return (a.next = s), a;
        s.path === t ? (a.thisEntry = s) : (a.prev = s), s.subMenu && o(t, s.subMenu, a);
    }
    return a;
}
export { s as M, e as d, o as g };
