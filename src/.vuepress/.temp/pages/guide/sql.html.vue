<template><div><!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-06-10 10:30:06
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-06-10 10:30:06
-->
<h2 id="_1-命名规范" tabindex="-1"><a class="header-anchor" href="#_1-命名规范" aria-hidden="true">#</a> **1****命名规范**</h2>
<p>命名采用英文单词或业务缩写，可使用字母/数字/下划线三种，<strong>建议</strong>见名知义，从名称上基本可以看出对象的使用，<strong>禁止</strong>拼音或中文命名数据对象。</p>
<p>对象名称字符可以多个单词组合，单词过长可采用缩写，命名对象的字符长度不能超过 30 个，单词间根据情况加下划线分割，例如：v_rds_user。</p>
<p>表/视图/索引等对象的命名格式： 前缀类型_对象名。</p>
<ul>
<li><strong>数据库命名</strong>
应用名称_dev 开发库；示例：eos_dev</li>
</ul>
<p>应用名称_test 测试库；示例：eos_test</p>
<p>如有多套环境，则在数据库名后加数字，示例：rds_dev_01</p>
<ul>
<li>
<p><strong>数据表命名</strong>
t<em>业务名称</em>表的作用；示例：t_user_role，t_order_detail，t_project_task</p>
<p>临时表：tmp<em>业务名称</em>表的作用</p>
</li>
<li>
<p><strong>视图命名</strong>
v<em>业务名称</em>表的作用；示例：v_mps_user，v_ct_order</p>
</li>
<li>
<p><strong>索引命名</strong>
idx<em>表名</em>字段名；示例：idx_t_user_user_code</p>
</li>
<li>
<p><strong>字段命名</strong>
从字段可以看出字段作用及存储的值，如 user_dept 应该改为 user_dept_code</p>
</li>
</ul>
<h2 id="_2-数据库开发规范" tabindex="-1"><a class="header-anchor" href="#_2-数据库开发规范" aria-hidden="true">#</a> **2****数据库开发规范**</h2>
<ol>
<li><strong>禁止</strong>使用存储过程，存储过程难以调试和扩展，更没有移植性；</li>
<li>使用 IN 或 NOT IN 子句时，特别是当子句中有多个值且表数据较多时，速度会明显下降。<strong>推荐</strong>采用连接查询或外连接查询来提高性能；或者使用 EXISTS 替代 IN；若实在避免不了，需要仔细评估 IN 后边的集合元素数量，控制在 1000 个之内；</li>
<li>对于数据库中表记录的查询和变更，只要涉及多个表，<strong>必须</strong>在列名前加表的别名（或表名）进行限定；</li>
<li><strong>禁止</strong>使用 select *，只获取必要字段，减少 cpu/io/内存/带宽的消耗；</li>
<li>insert<strong>必须</strong>指定字段，禁止使用 insert into T values()。指定字段插入，在表结构变更时，能保证对应用程序无影响；</li>
<li><strong>禁止</strong>负向查询 (where 子句中使用!=或&lt;&gt;操作符），以及%开头的模糊查询，会导致不能命中索引，全表扫描；</li>
<li><strong>禁止</strong>大表 JOIN 和子查询；</li>
<li><strong>禁止</strong>在 where 条件列使用函数或者表达式， 导致不能命中索引，全表扫描；</li>
<li>每张表<strong>必须</strong>增加两个字段创建时间（created_at），最后一次修改时间（updated_at），建议添加两个字段创建人（created_by），变更人（updated_by）;</li>
<li><strong>推荐</strong>使用 CHINER 工具进行数据库设计；</li>
<li><strong>建议</strong>日志库与业务库分离。</li>
</ol>
<h2 id="_3-建表规范" tabindex="-1"><a class="header-anchor" href="#_3-建表规范" aria-hidden="true">#</a> **3****建表规范**</h2>
<ol>
<li>
<p>表达是与否概念的字段，<strong>必须</strong>使用 is_xxx 的方式命名，数据类型是 tinyint（1 表示是，0 表示否）；
正例：表达逻辑删除的字段名 is_deleted，1 表示删除，0 表示未删除</p>
</li>
<li>
<p>表名、字段名<strong>必须</strong>使用小写字母或数字，<strong>禁止</strong>出现数字开头，<strong>禁止</strong>两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑；
说明：MySQL 在 Windows 下不区分大小写，但在 Linux 下默认是区分大小写。因此，数据库名、表名、字段名，都不允许出现任何大写字母，避免节外生枝。</p>
</li>
</ol>
<p>正例：rdc_config，level3_name</p>
<p>反例：rdcConfig，level_3_name</p>
<ol start="3">
<li>
<p>表名不使用复数名词；
说明：表名应该仅仅表示表里面的实体内容，不应该表示实体数量。</p>
</li>
<li>
<p>主键索引名为 pk<em>字段名；唯一索引名为 uk</em>字段名；普通索引名则为 idx<em>字段名；
说明：pk</em> 即 primary key；uk* 即 unique key；idx* 即 index 的简称。</p>
</li>
<li>
<p>小数类型为 decimal，<strong>禁止</strong>使用 float 和 double；
说明：在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。</p>
</li>
<li>
<p>如果存储的字符串长度几乎相等，使用 char 定长字符串类型；</p>
</li>
<li>
<p>varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索引效率；</p>
</li>
<li>
<p><strong>必须</strong>为表、字段等添加注释。如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释；</p>
</li>
<li>
<p>单表的字段数量不要超过 60 个；</p>
</li>
<li>
<p>多表中的相同列，<strong>必须</strong>保证列名一致，数据类型一致；</p>
</li>
<li>
<p>每个表必须设置唯一主键，可以使用分布式全局 ID(如基于 Snowflake 算法生成的 ID)作为主键，避免使用 UUID 以及长字符类型字段作为主键，尽可能避免联合主键；</p>
</li>
<li>
<p><strong>禁止</strong>将有业务属性的字段直接作为主键使用；</p>
</li>
<li>
<p>单表索引数量尽量控制在 5 个以内，Order by、distinct、group by 后的字段尽量建立索引；update、delete 语句的 where 尽量使用有索引的字段或主键</p>
</li>
<li>
<p><strong>建议</strong>选择合适的数据类型，有助于节约数据库表空间、节约索引存储，更重要的是提升检索速度。</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>数据类型</strong></th>
<th style="text-align:left"><strong>使用说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">char</td>
<td style="text-align:left">能够避免数据变长的场景选择，如编码字段</td>
</tr>
<tr>
<td style="text-align:left">varchar</td>
<td style="text-align:left">变长的数据选择，根据业务情况设置字段长度；</td>
</tr>
<tr>
<td style="text-align:left">int/tinyint</td>
<td style="text-align:left">如果用该类型存储状态值，尽量设置为非空；避免 NULL 这种容易产生歧义的值；</td>
</tr>
<tr>
<td style="text-align:left">number/decimal</td>
<td style="text-align:left">存储多位小数的精确的数值时优先选择这种类型；</td>
</tr>
<tr>
<td style="text-align:left">blob/image</td>
<td style="text-align:left">存储文件内容，尽可能规避这种用法，如果必须用数据库存储，则建议与业务库分离；</td>
</tr>
<tr>
<td style="text-align:left">（medium/long）text</td>
<td style="text-align:left">（长）文本字段，避免出现在查询子句中，避免对该类型字段建立索引，涉及长文本检索可考虑 ES 或程序内配合缓存实现全文检索；</td>
</tr>
</tbody>
</table>
</li>
</ol>
</div></template>
