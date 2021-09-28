---
title: 'Hadoop Resource Integration'
sidebar: true
author: 'Al-assad'
original: true
date: 2021/09/28
---

## Hadoop Resource Integration

To use Hadoop resources under StreamX Flink-K8s runtime, such as checkpoint mounting HDFS, accessing Hive, etc.  Users need to build the relevant Flink Base Docker Image by themselves. The Image needs to contain the following content：

* Include Hadoop Lib resource, and set `HADOOP_CLASSPATH`；
* Include Hadoop Config resource，and set `HADOOP_CONF_DIR`；
* Include  Hive Config Resource when using Hive;

<br/>

This is actually quite inconvenient 🥲, we will support automatic integration of Hadoop features in subsequent releases, Plz look forward to !

