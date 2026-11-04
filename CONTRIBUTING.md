# Contributing to OWASP VulnerableApp-facade

VulnerableApp-facade is a community project, and we are always delighted to welcome new contributors!
This guide is the starting point for everyone who wants to help, whether you are fixing a typo, improving the UI, or touching the Nginx/Lua gateway.

By participating, you agree to follow the [OWASP Code of Conduct](https://owasp.org/www-policy/operational/code-of-conduct) and the [Strict Rules](#strict-rules).


## Table of contents

1. [Project overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setting up the project locally](#setting-up-the-project-locally)
4. [Running the project](#running-the-project)
5. [Working on the React UI](#working-on-the-react-ui)
6. [Working on the Lua / Nginx module](#working-on-the-lua--nginx-module)
7. [Running tests and checks locally](#running-tests-and-checks-locally)
8. [Opening a pull request](#opening-a-pull-request)
9. [Best practices](#best-practices)
10. [Useful resources](#useful-resources)
11. [Strict Rules](#strict-rules)


## Ways to contribute

You do not need to write code to help. Every kind of contribution is welcome.

| Contribution                 | How you can help                                                                                                             |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| 🐞 **Report a bug**          | Open an issue with clear steps to reproduce, what you expected, and what happened. Screenshots and logs help a lot.          |
| 💻 **Contribute code**       | Fix a bug or build a feature in the React UI or the Lua/Nginx gateway. Issues labelled `good first issue` are a great start. |
| 🧪 **Contribute tests**      | Add or improve Jest tests in `facade-app/src/test`, or add edge cases for the Lua module.                                    |
| 👀 **Review pull requests**  | Read open PRs, try them locally, and leave constructive feedback.                                                            |
| 📝 **Improve documentation** | Fix typos, clarify setup steps, or update this guide and the README.                                                         |
| 🙋 **Help other users**      | Answer questions in issues and discussions, especially from newcomers.                                                       |
| 📣 **Spread the word**       | Write a blog post, give a talk, or share the project with your community.                                                    |


## Project overview

VulnerableApp-facade acts as a web server and gateway in front of several vulnerable applications (like VulnerableApp-base, PHP, ML Forge, Mail-pit, ....). 
It routes requests to them based on URL patterns, merges their Vulnerability Definitions, and renders a generic UI from those definitions.

It has two main components:

| Component                                  | Location                     | Tech                                         |
|--------------------------------------------|------------------------------|----------------------------------------------|
| React UI (skeleton user interface)         | `facade-app/`                | React 17, TypeScript, Jest, Prettier, ESLint |
| Gateway (routing and merging of responses) | `nginx.conf`, `lua-modules/` | OpenResty (Nginx + Lua)                      |

Other relevant files:

- `Dockerfile` builds the React app and packages it with OpenResty.
- `docker-compose.yml` runs the facade together with all integrated vulnerable applications.
- `docker-compose.without_llm.yml` runs everything except the LLM services (Ollama and LLMForge), which is lighter.
- `docker-compose.dev.yaml` overrides the facade's feature flags (`ENABLE_*`).
- `.github/workflows/Compile.yml` is the PR build (see [CI](#continuous-integration)).


## Prerequisites

Install the tools you need for the part of the project you are working on.

| Tool                                                                                                                                                         | Needed for                                 | Notes                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [Git](https://git-scm.com/downloads)                                                                                                                         | Everything                                 |                                                                                                                                               |
| [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)                                                 | Running the full stack, building the image | Required to run the vulnerable applications the facade talks to                                                                               |
| [Node.js](https://nodejs.org/) 14 and npm                                                                                                                    | React UI                                   | CI uses Node 14. Using the same version avoids surprises. A version manager such as [nvm](https://github.com/nvm-sh/nvm) makes switching easy |
| [Lua 5.4](https://www.lua.org/) and [LuaRocks](https://luarocks.org/)                                                                                        | Linting the Lua module                     | Only needed if you change files under `lua-modules/`                                                                                          |
| Code Editor Of Your Choice like [WebStorm](https://www.jetbrains.com/webstorm/download/?section=windows) or [Vscode](https://code.visualstudio.com/download) | If you are making code contributions       | To write the code in it                                                                                                                       |

Verify your setup:

```bash
git --version
docker --version
docker compose version   # or: docker-compose --version
node --version           # v14.x recommended
npm --version
webstorm .               # for Webstorm
code --version           # for VsCode
```


## Setting up the project locally

1. [Fork](https://github.com/SasanLabs/VulnerableApp-facade/fork) the repository on GitHub.
2. Clone your fork:

   ```bash
   git clone https://github.com/<your-username>/VulnerableApp-facade.git
   cd VulnerableApp-facade
   ```

3. Add the original repository as `upstream` so you can keep your fork up to date:

   ```bash
   git remote add upstream https://github.com/SasanLabs/VulnerableApp-facade.git
   ```

4. Install the React app dependencies:

   ```bash
   cd facade-app
   npm ci
   ```
Or 
> 💡 Prefer a graphical tool? You can use the [GitHub Desktop](https://desktop.github.com/download/) app instead of the command line for cloning and pushing.


## Running the project

The facade is only useful with the vulnerable applications behind it, and those run as Docker containers.

### Full stack

From the repository root:

```bash
docker-compose pull && docker-compose up
```

Then open `http://localhost`.

The default `docker-compose.yml` also starts Ollama and LLMForge, which download language models on first start and need a fair amount of disk space and memory. If you do not need them, use the lighter file:

```bash
docker-compose -f docker-compose.without_llm.yml pull
docker-compose -f docker-compose.without_llm.yml up
```

### Running only some applications

Remove the services you do not need from the compose file. To switch individual applications off in the facade itself, set the matching environment variable of the `VulnerableApp-facade` service to `false`:

- `ENABLE_VULNERABLEAPP_JSP`
- `ENABLE_VULNERABLEAPP_PHP`
- `ENABLE_LLMFORGE`


## Working on the React UI

1. Start the full stack as described above. The UI calls the vulnerable applications through the facade, so they need to be running.
2. In a second terminal:

   ```bash
   cd facade-app
   npm ci        # first time only
   npm run start
   ```

3. Open `http://localhost:3000`. The dev server proxies API calls to `http://localhost:80` (see `proxy` in `facade-app/package.json`) and reloads when you save a file.

Source code lives in `facade-app/src`:

- `Components/` holds the React components.
- `Utilities/` holds helper functions.
- `test/` holds the Jest tests and snapshots.
- `public/` holds static files, including `GlobalUtility.js`, which the vulnerability templates load separately from the React bundle.


## Working on the Lua / Nginx module

The Lua module (`lua-modules/vulnerableapp_utility.lua`) merges responses from the different vulnerable applications, and `nginx.conf` defines the routes.

The easiest way to try a change is to rebuild the image and run the stack with it:

```bash
docker build . -t sasanlabs/owasp-vulnerableapp-facade:latest
docker-compose up
```

`docker-compose.yml` uses the `latest` tag, so the image you just built is the one that runs (do not run `docker-compose pull` in between, or you will overwrite it with the published image).

To lint the Lua code the same way CI does:

```bash
luarocks install --local luacheck
export PATH="$HOME/.luarocks/bin:$PATH"
cd lua-modules
luacheck .
```

The linter settings are in `.luacheckrc` (the `ngx` global provided by OpenResty is already declared).

## Running tests and checks locally

Run these from the `facade-app` directory before you open a pull request. They are the same commands as the PR build:

```bash
npm ci                # install exact dependency versions
npm run lint          # ESLint on src (JS/JSX/TS/TSX), warnings fail the build
npm run format:check  # Prettier check on src and public
npm run build         # production build, catches type errors
CI=true npm run test -- --coverage   # unit tests with coverage, run once without watch mode
```

Notes:

- Without `CI=true`, `npm run test` starts Jest in interactive watch mode.
- The `test` script runs with `-u`, which **updates snapshots** in `src/test/__snapshots__`. If a snapshot file changes in your diff, check that the change is intentional before committing it.
- To fix formatting problems, run `npm run pretty`. It formats JS/JSX/TS/TSX/CSS under `src` and JS/CSS under `public`.
- `lint` does not cover `public/GlobalUtility.js`, but `format:check` does.

For Lua changes, run `luacheck .` in `lua-modules` as shown above.

### Continuous integration

Every pull request to `main` triggers the **Compile** workflow (`.github/workflows/Compile.yml`), which runs:

- `react-test`: `npm ci`, `npm run lint`, `npm run format:check`, `npm run build`, and `npm run test -- --coverage`, then uploads coverage to Codecov.
- `lua-validation`: `luacheck` on `lua-modules`.

Please make sure these pass before asking for a review. Running them locally first saves you a round trip.


## Opening a pull request

1. **Find or open an issue.** Comment on it saying you would like to work on it so that nobody duplicates the effort. Issues labelled `good first issue` are a good place to start.
2. **Sync your fork and create a branch from main:**

   ```bash
   git fetch upstream
   git checkout -b my-change upstream/main
   ```

   Use a short, descriptive branch name such as `fix-sitemap-merge` or `docs-contributing-guide`.
3. **Make your changes** and add or update tests where it makes sense. Before asking for review, squash your work into **one commit** (see [Commit messages and versioning](#commit-messages-and-versioning)).
4. **Run the checks** from [Running tests and checks locally](#running-tests-and-checks-locally).
5. **Push the branch** to your fork and open a pull request against `main` of `SasanLabs/VulnerableApp-facade`:

   ```bash
   git push origin my-change
   ```

6. **Describe your change.** Explain what changed and why, link the issue (for example `Fixes #67`), and include screenshots for UI changes.
7. **Respond to review.** Reviewers from the SasanLabs reviewer committee will look at your pull request. Push follow-up commits to the same branch to update it.

When your first pull request is merged you will get a comment with a short form to stay in touch with the community.

### Commit messages and versioning

Commit message rules:

- Write the message in **English**.
- Start with a **verb in the imperative form and a capital letter**, for example `Fix sitemap merge in Lua module`.
- Keep it **short and specific** (around 70 characters for the first line). Add details in the body if needed.
- Submit **one commit per pull request**. If you made several commits while working, squash them before review:

  ```bash
  git rebase -i upstream/main   # mark all commits except the first as "squash"
  git push --force-with-lease origin my-change
  ```

Versions are generated automatically from commit messages. By default, a merge bumps the patch version. To request a bigger bump, include `+semver:minor` or `+semver:major` in the commit message. See [docs/ReleaseVulnerableAppFacade.md](docs/ReleaseVulnerableAppFacade.md) for details.


## Best practices

- **Keep pull requests small and focused.** One logical change per pull request is much easier to review and make sure that it is related to the issue.
- **Follow the existing style.** Let Prettier handle formatting (`npm run pretty`), and keep ESLint at zero warnings.
- **Write tests** for new UI behavior and bug fixes. Existing tests in `facade-app/src/test` are a good model.
- **Do not commit generated files** such as `node_modules`, `build` or `coverage`.
- **Be careful with security.** This project is deliberately vulnerable by design, but the facade itself should not introduce unintended vulnerabilities. Sanitize anything you render (the UI already uses `dompurify`) and do not add real secrets or credentials to the repository.
- **Never run the stack on a public network.** The integrated applications contain real vulnerabilities. Run them locally or on an isolated network only.
- **Update documentation** (this file, the README, and code comments) when your change affects how the project is built, run or used.
- **Be respectful** and constructive in issues and reviews.


## License and contributor agreement

By submitting a pull request, you confirm that you wrote the code yourself or have the right to contribute it, and that your contribution is licensed under the same license as the project (see the [LICENSE](LICENSE) file). You do not need to sign a separate contributor agreement unless a maintainer tells you otherwise.


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
- OpenResty and Lua: [OpenResty](https://openresty.org/en/), [lua-nginx-module](https://github.com/openresty/lua-nginx-module), [Lua reference](https://www.lua.org/manual/5.4/), [Lua check](https://luacheck.readthedocs.io/)


## Getting help and important links

Stuck? Here is where to ask:

| Need                          | Where to go                                                                                    |
|-------------------------------|------------------------------------------------------------------------------------------------|
| 🐞 Bug or feature idea        | [GitHub Issues](https://github.com/SasanLabs/VulnerableApp-facade/issues)                      |
| 💬 Question about a change    | Comment on the related issue or pull request and mention a maintainer                          |
| 📘 Project background         | [OWASP VulnerableApp-facade project page](https://owasp.org/www-project-vulnerableapp-facade/) |
| 🔒 Security or conduct report | Email the maintainers privately at `karan.sasan@owasp.org`                                     |

Please be patient. Maintainers are volunteers and will review your issue or PR as soon as they can.
Don't forget maintainers are doing this for free in their free time for the community.


## Strict Rules

These rules apply to every space the project controls: issues, pull requests, commits, code, comments, discussions, reviews, test data, images, usernames and profile pictures. They are not optional, and maintainers may enforce them without prior discussion.

### 1. No sexual or explicit content

The project has a zero-tolerance policy for sexual content. The following are prohibited:

- Sexually explicit, pornographic, or suggestive text, images, GIFs, memes, links, emoji sequences, or code comments.
- Sexualized language or "jokes", including in variable names, test data, sample payloads, commit messages, and branch names.
- Sexual attention or advances toward any contributor, maintainer, or reviewer, whether public or private (direct messages, email, social media).
- Usernames, avatars, or profile bios that are sexual or explicit.
- Any sexual content involving minors. This is reported to the relevant platform and authorities immediately and results in a permanent ban with no warning.

This project is deliberately vulnerable by design, but "security testing" or "it is just a payload" is never an excuse for explicit content. Use neutral placeholder data.

### 2. Harassment and abuse

- No harassment, stalking, doxxing, threats, or intimidation.
- No discrimination or hate speech based on gender, sexual orientation, race, ethnicity, religion, disability, age, nationality, or any other characteristic.
- No personal attacks, trolling, or repeated hostile behavior in reviews or discussions.

### 3. Security and responsible use

- Never run the stack on a public network, and never use the applications against systems you do not own or have written permission to test.
- Never commit real secrets, credentials, or personal data.
- Report vulnerabilities in the facade itself privately to the maintainers instead of opening a public issue.
- Do not submit code that is intentionally malicious or that introduces unintended vulnerabilities.

### 4. Honest and quality contributions

- Do not submit spam, bulk, or purely auto-generated pull requests. You must understand and be able to explain every change you submit.
- Do not claim an issue you are not actively working on. Maintainers may reassign an issue after 14 days without activity.
- Do not copy code you do not have the right to contribute. All contributions must be compatible with the project license.
- Keep pull requests small, focused, and linked to an issue.

### 5. Enforcement

Maintainers will apply the lowest action that protects the community, but may skip steps for serious violations.

| Step | Action                                                                              | Typical trigger                                                                      |
|------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| 1    | Content is edited, hidden, or deleted, with a private or public note explaining why | First minor violation                                                                |
| 2    | Formal warning                                                                      | Repeated or clearly intentional violation                                            |
| 3    | Temporary ban (7 to 90 days) from issues, pull requests, and discussions            | Continued violation after a warning, or harassment                                   |
| 4    | Permanent ban and report to GitHub                                                  | Sexual content, sexual harassment, threats, content involving minors, or ban evasion |

- Pull requests and issues containing prohibited content are closed immediately, and their commits may be removed from history where possible.
- Ban evasion with new accounts results in a permanent ban.
- Reports of sexual misconduct or harassment are treated confidentially, and the reporter's identity is not shared without consent.

### 6. Reporting

If you see or experience a violation:

1. Do not engage with the person.
2. Report the content using GitHub's "Report content" option.
3. Contact the maintainers privately at `karan.sasan@owasp.org`.

Include links or screenshots where possible.

### 7. Appeals

A ban can be appealed once by emailing the maintainers within 30 days with an explanation. Bans for content involving minors are not eligible for appeal.

These rules supplement the [OWASP Code of Conduct](https://owasp.org/www-policy/operational/code-of-conduct) and GitHub's [Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines). **Maintainers may update them at any time.**
