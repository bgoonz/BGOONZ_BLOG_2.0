To submit a new job:
====================

sbatch job.sh

To list all jobs for a user:
============================

squeue -u

To cancel a job by id or name:
==============================

scancel scancel –name

To list all information for a job:
==================================

scontrol show jobid -dd

To status info for currently running job:
=========================================

sstat –format=AveCPU,AvePages,AveRSS,AveVMSize,JobID -j –allsteps
