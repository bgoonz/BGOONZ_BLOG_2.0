---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
## Pull Requests 

| Objective                                         | Description                                                                                                                                                                                                            | 1-3 (Not Passing)                                                                                                                                                                        | 4 (Passing)                                                                                                                                       | 5-7 (Exceptional)                                                                                                                                                                                               |
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Clearly documents the motivation and what changed | "Is it clear why the pull request exists?  Does it link to supporting documentation (user story, product roadmap, design) to give broader context? 
Is the code itself appropriately commented?"                       | The PR description is either blank or only contains the boilerplate PR template or unchecked checklist items. Code comments aren't used, even when they would be helpful.                | The PR description outlines the motivation for the feature and/or links to a user story or other document describing the purpose of the feature.  | The PR description includes a clear rationale for the feature, or a screenshot showing either the intended state or completed state of the feature, and gives additional context about changes made in the PR.  |
| Atomic, well-named commits                        | "Does the pull request consist of small commits with clear titles? Do all commits have relevant and sensible messages of what was changed?"                                                                            | "Commits are not named appropriately.
Commits have sensible messages. Example. ""Updated"", ""Fixed a bug"""                                                                             | "Commits are well named.
Commits have descriptive messages relevant to what changed.
Some commits are not atomic."                                | "Commits are well named.
Commits have descriptive messages.
Each commit introduces atomic changes."                                                                                                             |
| Appropriately Scoped                              | "Is the pull request small enough to review easily? Is it focused on solving a single cohesive problem?"                                                                                                               | "Pull request introduces multiple features or solves multiple problems.
PR is unreasonably big with many changed files.
Some code changes that are not related to the purpose of the PR" | "PR is relatively small.
PR has some minor changes not related to the feature or primary change being introduced."                                | "PR is focused on a single problem.
PR is small enough and easy to review."                                                                                                                                     |
| Adequately reviewed                               | "Has the pull request been reviewed by at least two team members?  Your release manager will be the final reviewer of the pull request.
Did they leave any comments or suggestions? 
Were those suggestions acted on?" | "PR was merged by the same developer who requested it.
The reviewer rejected PR with no comments.
PR was initiated again and suggested changes were not addressed."                      | "At least two team members reviewed PRs.
Appropriate comments were left in the PR.
Suggestions were acted upon."                                  | "PRs were reviewed by more than one team member.
PR requests were sent to multiple reviewers.
Active high-quality discussions are evident in PRs."                                                              |
| Code is clear and maintainable                    | "Is the code formatted appropriately?  Is there dead code?
logs and print statements have no place in your main branches!
Are there instances of duplicate code?
Does code have TODOs committed to main?"              | "Code has inconsistent formatting.
Significant amount of dead code across the codebase.
Multiple instances on TODOs in main.
Significant amount of duplicated code."                     | "Code is consistently formatted.
Functions are relatively small.
Few instances of duplicate code.
Few instances of dead code."                    | "Code is consistently formatted.
Has config files to enforce linting and formatting.
No instance on duplicate code."                                                                                            |
| Code is idiomatic                                 | Does the code follow industry standards for the language, framework, and libraries used?                                                                                                                               | Code consistently does not adhere to best practices for the language, framework or libraries used.                                                                                       | Code has apparent minor deviations from industry standards.                                                                                       | "Code follows best practices of language, framework and libraries use.  Effort has been made to improve on those practices."                                                                                    |




