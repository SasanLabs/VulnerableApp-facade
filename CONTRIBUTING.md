# Contributing to OWASP VulnerableApp-facade

VulnerableApp-facade is a community project and contributions are welcome. This guide covers how to set up the project, run it, and send a change, whether it is a typo fix, a UI change, or work on the Nginx/Lua gateway.

By participating, you agree to follow the [VulnerableApp's Code of Conduct](https://github.com/SasanLabs/VulnerableApp/blob/master/CODE_OF_CONDUCT.md) and the [Strict Rules](#strict-rules).


## Table of contents

1. [Ways to contribute](#ways-to-contribute)
2. [Project overview](#project-overview)
3. [Prerequisites](#prerequisites)
4. [Setting up the project locally](#setting-up-the-project-locally)
5. [Running the project](#running-the-project)
6. [Working on the React UI](#working-on-the-react-ui)
7. [Working on the Lua / Nginx module](#working-on-the-lua--nginx-module)
8. [Running tests and checks locally](#running-tests-and-checks-locally)
9. [Opening a pull request](#opening-a-pull-request)
10. [Best practices](#best-practices)
11. [License and contributor agreement](#license-and-contributor-agreement)
12. [Useful resources](#useful-resources)
13. [Getting help and important links](#getting-help-and-important-links)
14. [Strict Rules](#strict-rules)


## Ways to contribute

You can help without writing code.

| Contribution                 | How you can help                                                                                                   |
|------------------------------|--------------------------------------------------------------------------------------------------------------------|
| 🐞 **Report a bug**          | Open an issue with steps to reproduce, what you expected, and what happened. Add screenshots or logs.              |
| 💻 **Contribute code**       | Fix a bug or add a feature in the React UI or the Lua/Nginx gateway. Try issues labelled `good first issue` first. |
| 🧪 **Contribute tests**      | Adjust tests in `facade-app/src/test`, or edge cases for the Lua module.                                           |
| 👀 **Review pull requests**  | Run open PRs locally and comment on what you find.                                                                 |
| 📝 **Improve documentation** | Fix typos, correct setup steps, or update this guide and the README.                                               |
| 🙋 **Help other users**      | Answer questions in issues and discussions.                                                                        |
| 📣 **Spread the word**       | Write about the project, talk about it, or share it with people who might use it.                                  |


## Project overview

VulnerableApp-facade is a web server and gateway that sits in front of several vulnerable applications (VulnerableApp-base, PHP, LLMForge, Mailpit and others).
It routes requests to them by URL pattern, merges their Vulnerability Definitions, and renders a generic UI from those definitions.

It has two components:

| Component                                  | Location                     | Tech                                         |
|--------------------------------------------|------------------------------|----------------------------------------------|
| React UI (skeleton user interface)         | `facade-app/`                | React 17, TypeScript, Jest, Prettier, ESLint |
| Gateway (routing and merging of responses) | `nginx.conf`, `lua-modules/` | OpenResty (Nginx + Lua)                      |

Other files you will run into:

- `Dockerfile` builds the React app and packages it with OpenResty.
- `docker-compose.yml` runs the facade with all the integrated vulnerable applications.
- `docker-compose.without_llm.yml` does the same without the LLM services (Ollama and LLMForge), so it is lighter.
- `docker-compose.dev.yaml` overrides the facade's feature flags (`ENABLE_*`).
- `.github/workflows/Compile.yml` is the PR build (see [CI](#continuous-integration)).


## Prerequisites

You only need the tools for the part of the project you are changing.

| Tool                                                                                                                                                              | Needed for                                 | Notes                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|---------------------------------------------------------------------------------------------|
| [Git](https://git-scm.com/downloads)                                                                                                                              | Everything                                 |                                                                                             |
| [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)                                                      | Running the full stack, building the image | Runs the vulnerable applications the facade talks to                                        |
| [Node.js](https://nodejs.org/) 14 and npm                                                                                                                         | React UI                                   | CI uses Node 14, so use the same. [nvm](https://github.com/nvm-sh/nvm) makes switching easy |
| [Lua 5.4](https://www.lua.org/) and [LuaRocks](https://luarocks.org/)                                                                                             | Linting the Lua module                     | Only if you change files under `lua-modules/`                                               |
| Code editor of your choice, such as [WebStorm](https://www.jetbrains.com/webstorm/download/?section=windows) or [VS Code](https://code.visualstudio.com/download) | Code contributions                         | Any editor works                                                                            |

Check your setup:

```bash
git --version
docker --version
docker compose version   # or: docker-compose --version
node --version           # v14.x recommended
npm --version
webstorm .               # for WebStorm
code --version           # for VS Code
```


## Setting up the project locally

1. [Fork](https://github.com/SasanLabs/VulnerableApp-facade/fork) the repository on GitHub.
2. Clone your fork:

   ```bash
   git clone https://github.com/<your-username>/VulnerableApp-facade.git
   cd VulnerableApp-facade
   ```

3. Add the original repository as `upstream` so you can pull in new changes:

   ```bash
   git remote add upstream https://github.com/SasanLabs/VulnerableApp-facade.git
   ```

4. Install the React app dependencies:

   ```bash
   cd facade-app
   npm ci
   ```

> 💡 If you prefer a GUI, [GitHub Desktop](https://desktop.github.com/download/) can do the cloning and pushing instead of the command line.


## Running the project

The facade only works with the vulnerable applications behind it, and those run as Docker containers.

### Full stack

From the repository root:

```bash
docker compose pull && docker compose up
```

Then open `http://localhost`.

The default `docker-compose.yml` also starts Ollama and LLMForge. They download language models on first start and use a lot of disk space and memory. If you don't need them, use the lighter file:

```bash
docker compose -f docker-compose.without_llm.yml pull
docker compose -f docker-compose.without_llm.yml up
```

> 💡 If you have the standalone Compose binary instead of the Compose plugin, use `docker-compose` wherever this guide says `docker compose`.

### Running only some applications

Delete the services you don't need from the compose file, and remove them from every `depends_on` list that names them, or Compose rejects the file. To exclude an application from aggregated definitions, scanner results, and sitemaps, set its environment variable on the `VulnerableApp-facade` service to `false`. This does not block its direct gateway route:

- `ENABLE_VULNERABLEAPP_JSP`
- `ENABLE_VULNERABLEAPP_PHP`
- `ENABLE_LLMFORGE`

> ⚠️ These flags are not access controls. They only exclude the application from the facade's aggregated responses. If the backend is still running, its direct gateway route stays reachable.

## Working on the React UI

1. Start the full stack as described above. The UI calls the vulnerable applications through the facade, so they must be running.
2. In a second terminal:

   ```bash
   cd facade-app
   npm ci        # first time only
   npm run start
   ```

3. Open `http://localhost:3000`. The dev server proxies API calls to `http://localhost:80` (see `proxy` in `facade-app/package.json`) and reloads when you save.

Source code is in `facade-app/src`:

- `Components/` has the React components.
- `Utilities/` has helper functions.
- `test/` has the Jest tests and snapshots.

Static files are in `facade-app/public`. `public/index.html` loads `GlobalUtility.js` outside the React bundle, and the vulnerability templates call its functions.


## Working on the Lua / Nginx module

The Lua module (`lua-modules/vulnerableapp_utility.lua`) merges responses from the vulnerable applications, and `nginx.conf` defines the routes.

Run all commands in this section from the **repository root**. If you are still in `facade-app` from the setup steps, run `cd ..` first.

To try a change, rebuild the image and run the stack:

```bash
docker build . -t sasanlabs/owasp-vulnerableapp-facade:latest
docker compose up
```

`docker-compose.yml` uses the `latest` tag, so it will run the image you just built. Don't run `docker compose pull` in between, because that replaces your image with the published one.

To lint the Lua code the way CI does, again from the repository root:

```bash
luarocks install --local luacheck
export PATH="$HOME/.luarocks/bin:$PATH"
cd lua-modules
luacheck .
```

Linter settings are in `.luacheckrc`, which already declares the `ngx` global from OpenResty.


## Running tests and checks locally

Run these from the `facade-app` directory before opening a pull request. They match the PR build:

```bash
npm ci                # install exact dependency versions
npm run lint          # ESLint on src (JS/JSX/TS/TSX), warnings fail the build
npm run format:check  # Prettier check on src and public
CI=true npm run build # production build, catches type errors
CI=true npm run test -- --coverage   # unit tests with coverage, single run
```

Notes:

- GitHub Actions sets `CI=true`, which makes the build fail on warnings. Run `build` and `test` with `CI=true` locally so they behave like the PR build. Without `CI=true`, `npm run test` starts Jest in watch mode.
- On Windows, the `CI=true` prefix does not work as written. In PowerShell, run `$env:CI="true"` once and then use the commands above without the prefix. In Command Prompt, run `set CI=true` once and do the same.
- The `test` script runs with `-u`, which **updates snapshots** in `src/test/__snapshots__`. If a snapshot shows up in your diff, make sure the change is intended.
- `npm run pretty` fixes formatting. It covers JS/JSX/TS/TSX/CSS under `src` and JS/CSS under `public`.
- `lint` skips `public/GlobalUtility.js`, but `format:check` covers it.

For Lua changes, run `luacheck .` in `lua-modules` as shown above.

### Continuous integration

Every pull request to `main` runs the **Compile** workflow (`.github/workflows/Compile.yml`):

- `react-test` runs `npm ci`, `npm run lint`, `npm run format:check`, `npm run build` and `npm run test -- --coverage`, then uploads coverage to Codecov.
- `lua-validation` runs `luacheck` on `lua-modules`.

These should pass before you ask for a review. Running them locally first is quicker.


## Opening a pull request

1. **Find or open an issue.** Comment that you want to work on it so nobody else duplicates the work. Issues labelled `good first issue` are a good place to start.
2. **Sync your fork and create a branch from main:**

   ```bash
   git fetch upstream
   git checkout -b my-change upstream/main
   ```

   Use a short branch name like `fix-sitemap-merge` or `docs-contributing-guide`.
3. **Make your changes** and add or update tests where it makes sense. Squash everything into **one commit** before asking for review (see [Commit messages and versioning](#commit-messages-and-versioning)).
4. **Run the checks** from [Running tests and checks locally](#running-tests-and-checks-locally).
5. **Push the branch** to your fork and open a pull request against `main` of `SasanLabs/VulnerableApp-facade`:

   ```bash
   git push origin my-change
   ```

6. **Describe your change.** Say what changed and why, link the issue (for example `Fixes #67`), and add screenshots for UI changes.
7. **Respond to review.** Reviewers from the SasanLabs reviewer committee will look at the PR. Push follow-up commits to the same branch.

After your first pull request is merged, you will get a comment with a short form to stay in touch with the community.

### Commit messages and versioning

- Write the message in **English**.
- Start with a **capitalized verb in the imperative**, for example `Fix: sitemap merge in Lua module`.
- Keep the first line **short** (around 70 characters) and put details in the body.

Versions are generated from commit messages. A merge bumps the patch version by default. For a bigger bump, put `+semver:minor` or `+semver:major` in the commit message. Details are in [docs/ReleaseVulnerableAppFacade.md](docs/ReleaseVulnerableAppFacade.md).


## Best practices

- **Keep pull requests small and focused.** One logical change per PR, tied to the issue, is easier to review.
- **Follow the existing style.** Prettier handles formatting (`npm run pretty`), and ESLint should report zero warnings.
- **Write tests** for new UI behavior and bug fixes. The tests in `facade-app/src/test` show the pattern.
- **Don't commit generated files** like `node_modules`, `build` or `coverage`.
- **Mind security.** The project is vulnerable on purpose, but the facade itself shouldn't add unintended vulnerabilities. Sanitize anything you render (the UI already uses `dompurify`) and never add real secrets or credentials.
- **Never run the stack on a public or shared network.** The integrated applications have real vulnerabilities. Docker isolates the containers from your system, but ports that Compose publishes can be reachable from other machines on the same network. Run the stack only on a trusted or isolated network. But you can run it with caution and on your own liability.
- **Update the docs** (this file, the README, code comments) when your change affects how the project is built, run or used.
- **Be respectful** in issues and reviews.


## License and contributor agreement

By submitting a pull request, you confirm that you wrote the code or have the right to contribute it, and that it is licensed under the project's license (see [LICENSE](LICENSE)). No separate contributor agreement is needed unless a maintainer says otherwise.


## Useful resources

Project:

- [README](README.md)
- [OWASP VulnerableApp-facade project page](https://owasp.org/www-project-vulnerableapp-facade/)
- [VulnerableApp documentation and design](https://sasanlabs.github.io/VulnerableApp/DesignDocumentation.html)
- [Integrated applications](README.md#integrated-vulnerable-applications)

Contributing to GitHub projects:

- [How to contribute to open source](https://opensource.guide/how-to-contribute/)
- [Forking a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

Technologies used:

- Docker: [Get started](https://docs.docker.com/get-started/), [Compose overview](https://docs.docker.com/compose/)
- React: [Documentation](https://17.reactjs.org/docs/getting-started.html), [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- TypeScript: [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- Jest: [Documentation](https://jestjs.io/docs/getting-started)
- Prettier and ESLint: [Prettier](https://prettier.io/docs/en/index.html), [ESLint](https://eslint.org/docs/latest/)
- OpenResty and Lua: [OpenResty](https://openresty.org/en/), [lua-nginx-module](https://github.com/openresty/lua-nginx-module), [Lua reference](https://www.lua.org/manual/5.4/), [luacheck](https://luacheck.readthedocs.io/)


## Getting help and important links

| Need                          | Where to go                                                                                    |
|-------------------------------|------------------------------------------------------------------------------------------------|
| 🐞 Bug or feature idea        | [GitHub Issues](https://github.com/SasanLabs/VulnerableApp-facade/issues)                      |
| 💬 Question about a change    | Comment on the related issue or PR and mention a maintainer                                    |
| 📘 Project background         | [OWASP VulnerableApp-facade project page](https://owasp.org/www-project-vulnerableapp-facade/) |
| 🔒 Security or conduct report | [Open a public issue](https://github.com/SasanLabs/VulnerableApp-facade/issues/new/choose)     |

Maintainers are volunteers, so reviews can take a while.

