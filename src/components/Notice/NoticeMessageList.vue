<template>
  <el-tabs>
    <el-tab-pane label="User" name="first">
      <ul>
        <li>
          <el-row justify="center" align="middle">
            <el-col :span="4" align="middle">
              <el-avatar
                size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              />
            </el-col>

            <el-col :span="20" class="px-2">
              <!--              消息-->
              <el-row align="middle" class="flex-nowrap! mb-2">
                <div class="text-base line-clamp-1">
                  消息标题
                  消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题消息标题
                </div>
                <el-tag class="ml-2" type="success" size="small" effect="dark">Tag 2</el-tag>
              </el-row>

              <el-row>
                <div class="text-sm text-gray-400 mb-2 line-clamp-2">
                  消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,
                  消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,
                  消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,
                  消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,
                  消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,消息内容消息内容,
                </div>
              </el-row>

              <el-row>
                <div class="text-sm text-gray-400">2023-10-01 23:00</div>
              </el-row>
            </el-col>
          </el-row>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>

  <div class="w-full flex justify-around border-t">
    <div
      class="flex-1 py-3 border-r flex items-center justify-center hover:bg-sky-100 cursor-pointer text-gray-500"
    >
      <Delete></Delete>
      <span class="ml-2">清空</span>
    </div>
    <div
      class="flex-1 py-3 flex items-center justify-center hover:bg-sky-100 cursor-pointer text-gray-500"
    >
      <More></More>
      <span class="ml-2">更多</span>
    </div>
  </div>
</template>

<script setup lang="tsx">
const Delete = () => <i class="i-ep:delete"></i>
const More = () => <i class="i-ep:more"></i>
</script>

<style scoped></style>
