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
# How to Kill a Process in Linux Using ps, pgrep, pkill and More

> Managing processes in Linux can appear daunting to a new system administrator (sysadmin) at first. But with a little explanation and demonstration, you’ll learn how to fi...

Managing processes in Linux can appear daunting to a new system administrator (sysadmin) at first. But with a little explanation and demonstration, you’ll learn how to find and kill processes in Linux is just a matter of using command-line tools such as ps and kill.

In this article, you will learn commands for locating running and errant processes, killing (terminating) running processes, finding background processes, and much more on any Linux operating system.

1 second of 1 minute, 4 secondsVolume 0%

This ad will end in 7

00:08

00:06

00:15

By the end of the article, you will be managing processes based on process identification numbers (PIDs) from the command line like a Linux pro. Keep reading to learn all about process management commands in Linux!

## Prerequisites

This article is going to be a walk-through of how to manage processes in Linux. If you want to be hands-on, you will need the following:

*   A Linux host, which can be a virtual machine or a physical machine.

*   To try the PowerShell examples, install [*PowerShell 7.1.1*](https://github.com/PowerShell/PowerShell) on a Linux host.

*   A non-root user account. While root access is not required, there will be an example where the root user can kill the running process of another user.

> *The distribution of Linux, you choose to use, is up to you. This article will be based on Ubuntu 20.04 LTS. However, the commands are standard for the Linux operating system.*

Ready to get started? Good, let’s dive in.

## Managing Processes in Linux

On occasion, you may run into a scenario where you need to stop a running process on a Linux system. As an example, you may have a bash script that runs on a schedule. That bash script is configured to run as another user via a [*cron*](https://man7.org/linux/man-pages/man8/cron.8.html) job (Linux process scheduler).

Sometimes, this script spawns errant processes that can make the script fail. How do you kill those errant processes without rebooting the system or stopping the script?

In the next sections, you will walk through commands used to locate and terminate or *kill* processes on a Linux system. Each section will build on the last. You will learn about ps, top, pgrep, kill, and pkill commands all native to Linux.

As a bonus, PowerShell equivalent commands \[Get-Process]\(https://adamtheautomator.com/powershell-get-process/ "Get-Process") and Stop-Process are included if Linux native commands are not your style.

Before killing a process you must locate the correct process to target. The unique PID allows for precise targeting. Read on to learn how to locate the correct processes for termination.

### Using the ps Command to Display Process Information

The [*Process Status*](https://man7.org/linux/man-pages/man1/ps.1.html) or ps command displays information related to active processes on a Linux system. You can locate a running process and even *background processes* with ps.

The command ps will, by default, display all of the processes for the  (EUID) of the current user. Running the ps command, as shown below, will return every running process that your user can terminate.

    ps



Displaying processes matching the EUID (effective user ID) for the user bkindle.

### Finding Expanded Process Information Using the top Command

What if you want to find constantly refreshing information on running processes and system metrics, in that case, you can use the top command. Unlike ps, the top command updates the process information on the screen over a set interval.

When you run the top command, you will see more than just a PID. Included with process details are CPU and memory percentages, [*Nice values (CPU scheduling process priority)*](https://www.tecmint.com/set-linux-process-priority-using-nice-and-renice-commands/), and the process priority (PR) set by the Linux kernel.

For a new or experienced sysadmin, the top command is often the primary tool for managing vital system resources and processes. As shown below, the top command output displays more process information than the ps command including overall system metrics.



The top command on Ubuntu Desktop 20.04 LTS showing all running PID’s.

* is an enhanced variant of top which includes various improvements, such as a colorized terminal output.*

Let’s say you’d like to inspect the memory or CPU resources a process is consuming. In that case, you can use the p switch of top as shown below.

    top -p 2113



The top command displaying information on only one PID, 2113.

Perhaps you need to display all running processes for a specific username. The top command offers the **u** switch to display only a specific user’s processes. As seen in the example below, PIDs matching only the user ID bkindle are shown.

    top -u bkindle



The top command displaying only processes for the user bkindle.

### Locating Specific Process PIDs with the pgrep Command

Originally a Solaris command, \[pgrep]\(https://man7.org/linux/man-pages/man1/pgrep.1.html) was ported for use with Linux. Combining the search power of the grep command and the process management of ps, pgrep offers flexibility in finding the exact process to target.

Although ps displays more information, pgrep is designed to return only the PID of the returned processes. pgrep helps with locating the process using the [*many available search parameters*](https://man7.org/linux/man-pages/man1/pgrep.1.html). In the following example, pgrep is shown searching for any process matching vmtoolsd.

    pgrep vmtoolsd



Using pgrep to obtain all PIDs associated with vmtoolsd.

Similarly, specify a user ID with the u switch to retrieve only processes associated with that specific user. As shown below, only a single PID is returned for the user bkindle and the vmtoolsd process.

    pgrep -u bkindle vmtoolsd



Retrieving the specific PID for the vmtoolsd process associated with the user bkindle.

### Finding Processes with PowerShell’s Get-Process in Linux

Typical Linux commands work great, but did you know PowerShell is able to manage Linux processes too? The Get-Process cmdlet works similar to the Linux ps command and returns process information. For example, perhaps you need to find all running processes by the current user, bkindle. As shown below, find all PIDs (labeled ID by Get-Process) of the user bkindle.

    Get-Process -IncludeUserName |
    	Where-Object {$_.UserName -eq 'bkindle'} |
    	Select-Object -Property 'Id','UserName','ProcessName'



Retrieving Linux PID’s with PowerShell’s Get-Process cmdlet.

***Related: ***

Having learned how to locate different processes, read on to discover all the ways to terminate or kill a process in Linux!

## Killing Processes Using the Kill Commands in Linux

In previous sections, you learned how to locate the PID of the process you want to send a kill signal to using native Linux and PowerShell commands. The next sections will explain how to use the [\_kill\_](https://man7.org/linux/man-pages/man2/kill.2.html) and pkill programs, its associated signals, and command-line switches.

### Linux Signals and Process Management

Signals are the method that Linux uses to communicate with processes running in the operating system. The three primary signals that the kill command uses to terminate processes are:

*   1 (SIGHUP) – Terminates interactive programs and causes daemons (background services) to re-read the configuration files the process uses.

*   9 (SIGKILL) – Forces the process to exit without performing graceful shutdown tasks.

*   15 (SIGTERM) – Allows a process to terminate gracefully, such as closing open files when finished. This is the default signal used when no number is specified when using the kill command.

> *While this article only focuses on the three main signals used for killing processes, there are a total of 64 available signals. Use kill -l to get the list of signals and their corresponding number.*

Great video on understanding process signals

Now that you understand the three main signals used in terminating a process, learn how to kill a process in the next sections.

### Using the kill Command to Terminate a Process

In this next example, you will use the kill command. Pretend for a moment that you are running a PowerShell instance, named pwsh, and the PID assigned is 22687. One way to terminate this process is shown below.

1.  Use pgrep pwsh to determine the PID for the process pwsh, used in the kill command.

2.  Use kill -s TERM 22687 to terminate the pwsh process gracefully. The TERM command maps to the 15 (SIGTERM) signal and indicated using the s parameter of the kill command.

3.  Use your choice of top, ps, or pgrep to verify the PID is no longer listed.

Shown below is an example of the above process from an Ubuntu 20.04 LTS bash terminal.



Using kill and associated commands to terminate the pwsh process.

> *The  command will terminate all processes based on a name instead of PID, which can make this command pretty destructive if used carelessly. If you choose to use this command, however, use the i option to cause the command to ask for confirmation.*

### Killing Processes by Name with pkill

You may have noticed that the kill command only works with process IDs. This can make terminating a process a complicated multi-step process. The \_\[pkill]\(https://linuxize.com/post/pkill-command-in-linux/)\_ command, included in the [*procps and procps-ng*](https://gitlab.com/procps-ng/procps) packages, terminates a process based on a searched name.

Functionally, the pkill command acts as a wrapper around the pgrep program. The pkill command sends a specified signal to each process found instead of only listing the PIDs in the terminal. pkill differs from kill in that pkill can only use the name of a process, not the PID.

> *The pkill command is not available, by default, in Ubuntu 20.04 LTS. You will have to download and install the application. To do so, run sudo apt install mcollective-plugins-process -y.*

To kill a process using pkill , perform the following steps:

1.  Use ps to verify the nano application (a command-line text editor) is currently running. This step is optional, but a safety check before killing a process.

2.  Use pkill -9 nano to forcefully terminate the nano application.

Shown below is an example of the above process from an Ubuntu 20.04 LTS bash terminal.



Using the pkill command to forcefully terminate the nano process.

### Killing a Process with the Top Command

When you run the top command to view running processes, you can kill a given process with the **k** keystroke. You’ll see an interactive prompt asking for the PID of a process to kill.

As shown below, run the top command and press **k.** Enter the PID that you want to kill, and press the **Enter** key to immediately terminate the PID.



Use top to specify a process to terminate using the **k** keystroke.

Next, learn one more alternative to native Linux commands using the PowerShell Stop-Process command!

### Using the PowerShell Stop-Process Command to Terminate a Process

If Linux native commands aren’t your style, PowerShell has you covered! Just as with the kill command, you can terminate processes using the  cmdlet in Linux. Once again, pretend you are running a PowerShell pwsh process.

1.  Find the PID with Get-Process -ProcessName 'pwsh' and note the PIDs to terminate.

2.  Use Stop-Process -Id 29992,30014 to terminate the multiple processes returned.

3.  Use Get-Process -ProcessName 'pwsh' and verify the PIDs, 29992 and 30014 are no longer listed, meaning they have been terminated.

> *You can also use Get-Process and the kill method to terminate one or multiple processes: (Get-Process -Id \[PID]).Kill() or (Get-Process -Id \[PID1,2,3,4]).Kill().*
>
> ***Exercise caution when using the ProcessName parameter. Using this parameter behaves similar to the killall command, and will kill all processes matching the name(s) provided.***

Below is an example of the above process from an Ubuntu 20.04 LTS bash terminal.



Using PowerShell, Stop-Process to kill processes in Linux.
