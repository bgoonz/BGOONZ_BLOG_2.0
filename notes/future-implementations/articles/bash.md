# 7 Tips - Tuning Command Line History in Bash - ShellHacks

> 7 Tips that can help you to improve you Bash history file. You will learn how to add date and time to bash history file, increase history size, ignore specific commands and much more … Every command that you enter, is stored in the file ~/.bash_history. Run history to see your last commands. You can […]

7 Tips that can help you to improve you Bash history file.

You will learn how to add date and time to bash history file, increase history size, ignore specific commands and much more …

Every command that you enter, is stored in the file **~/.bash_history**. Run **history** to see your last commands.

You can improve your Bash history, appending different environment variables to your `~/.bashrc` file.

After modifying `~/.bashrc` file, execute the following command to apply changes:

source ~/.bashrc

## 1\. Add Date and Time to Bash History

Sometimes it would be very nice to know when some command got executed.

Set `HISTTIMEFORMAT` to print the time stamps associated with each history entry.

Append the following line to `~/.bashrc` file:

export HISTTIMEFORMAT="%h %d %H:%M:%S "

Now, when you type **history**, it will show something like:

113 Jun 08 16:31:06 sudo ifconfig
114 Jun 08 16:31:10 top
115 Jun 08 16:31:19 ping 8.8.8.8
116 Jun 08 16:31:22 history

## 2\. Increase Bash History Size

Increase `HISTSIZE` – the number of commands to remember in the command history (the default value is 500).

export HISTSIZE=10000

Increase `HISTFILESIZE` – the maximum number of lines contained in the history file (the default value is 500).

export HISTFILESIZE=10000

## 3\. Append Bash Commands to History File

Bash overwrites `.bash_history` file?

To append commands to the history file, rather than overwrite it, add the following line to `~/.bashrc`:

shopt -s histappend

## 4\. Store Bash History Immediately

By default, Bash only records a session to the `.bash_history` file when the session terminates.

This means that if you crash or your session terminates improperly, you lose the history up to that point.

Use `$PROMPT_COMMAND` variable to save each command right after it has been executed.

Append the following line to `~/.bashrc` file, if the variable `$PROMPT_COMMAND` hasn’t been set yet:

PROMPT_COMMAND='history -a'

Append the following line, if the variable `$PROMPT_COMMAND` has already been set:

PROMPT_COMMAND='$PROMPT_COMMAND; history -a'

## 5\. Control Bash History

`HISTCONTROL` is a colon-separated list of values controlling how commands are saved in the history file.

| Value       | Description                                           |
| ----------- | ----------------------------------------------------- |
| ignorespace | don’t save lines which begin with a <space> character |
| ignoredups  | don’t save lines matching the previous history entry  |
| ignoreboth  | use both ‘ignorespace’ and ‘ignoredups’               |
| erasedups   | eliminate duplicates across the whole history         |

Example:

export HISTCONTROL=ignorespace:erasedups

## 6\. Ignore Specific Commands

`HISTIGNORE` is a colon-separated list of patterns used to decide which command lines should be saved in the history file.

Don’t save `ls`, `ps` and `history` commands:

export HISTIGNORE="ls:ps:history"

Don’t save commands with `s` in the beginig:

export HISTIGNORE="s\*"

## 7\. Use one command per line

Store multi-line commands in one history entry:

shopt -s cmdhist

## Change the History File Name

Use `HISTFILE` to change the name of the file in which Bash history is saved. The default value is `~/.bash_history`.

export HISTFILE=~/.custom_file

[Source](https://www.shellhacks.com/tune-command-line-history-bash/)
