<!--
 * @Author: Lucifer
 * @Data: Do not edit
 * @LastEditors: Lucifer
 * @LastEditTime: 2024-07-16 17:49:04
 * @Description: 
-->
# 前端开发阶段计划

## 20240705

> 问题用例列表
> 项目用例分布栏

### 问题用例列表项

- 问题用例名称
- 问题用例时间
- 问题用例状态

#### 交互设计

- 鼠标点击事件
    - 点击以后出现Modal状态框.里面出现改用例的具体数据
        - 项目上传的用例模板的字段
        - case_log表出现的改用例的数据
    - 鼠标点击以后跳转新的页面.加载上诉的数据(适用于数据量比较大的情况)
**两段数据源.如果case_log表没有数据则只有一段段.如果case_log表有数据则有两段**

### 项目用例分布栏

- 项目用例分布
- 项目用例分布饼状图
- 项目用例分布卡片

#### 交互设计

- 鼠标点击事件
    - 点击某个用例卡片
        - 跳转加载页面.数据为该类型用例的详细数据
        - 或者不做可点击

### 数据支持

- 当前项目所有的用例数据分布
    - 功能用例
    - 接口用例

- 当前项目当中用例状态为
    - 不通过待确认
    - 不通过已确认

**这两部分的用例.返回状态匹配的用例数据.前端设计一个问题用例类去处理这部分数据**

### 关键数据表

- case表字段 -> 关联project和plan_case表
    - 现阶段为测试用例模板对应字段
    <!-- - isUpdate -> 是否有变更 -> 用例是否有过更改记录 -->

- case_log表字段 -> case当中重要字段的变更
    - case_id -> 关联case表
    - case表的前后变更记录

- case_plan表
    - 关联project表 -> 一个项目下面有多个测试计划.一个测试计划下面有多个用例 -> 一个测试计划只能属于一个项目
    - 关联case表 -> 一个测试计划下面有多个用例 -> 一个不通过的用例可以存在多个测试计划当中
    - 测试结果变更
        - 单人工作
            - 一个人可以创建多个计划
            - 每个计划的用例不相关联
    
- 前端传参:
    - project_id
    - user_id(需要) -> 前端不传 -> token有
    - plan_name
    - start_time
    - end_time
    - create_time
    - update_time

- new_api
    - plan_id -> 后端返回

- git设计模式
    - commit触发节点
        - 每一次的用例更改触发一次pr提交
        - 计划结束的时候统一进行一次pr提交 -> ✔

#### 需求点

- 看到用例状态的变更 -> 跟踪用例状态的变更 -> case_log表插入的情况设计
- 目前设计
    - 只要用例不通过既展示.用例通过了以后状态不进行追踪.只追踪用例当中信息的(除了用例状态)变化,不追踪结果变化
- 待考察需求
    - 需要追踪结果的变化 -> 只要变化就进行追踪

## 20240716

> 测试用例模板字段确定
> 测试用例模板api确定

### 包括内容

- 用例数据的树形结构
    - 选择user以后一次性把该user下的该项目的所有的plan和case返回
        - 前端设计
            - 设计一个组件.当选择user以后进行确定操作.数据渲染到该组件 -> 该组件只有一个复制的可选按钮
            - api层面新增权限控制.只有case属于user才可以进行增、删、改的操作.否则只可以进行查询的操作
- 测试用例模板字段类型
    - 测试用例当中关键字段 -> 需记录的字段
    - 测试用例当中关于日期的格式 -> 日期格式类型
- 测试用例上传api输入输出
    - 输入字段
    - 输出内容

#### 目前发现关于case解析的问题

- extract_data当中的 -> merged_cells_value = self.get_merged_cells_value(sheet)
    - 每次只获取一遍合并单元格的zhi
        - 如果三条数据.合并两条,不合并一条.第三条数据会出错