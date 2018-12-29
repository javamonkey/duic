<template>
  <v-container style="transform: translate(0,0)">
    <div class="list-apps">
      Left Menus
    </div>

    <v-layout>
      <v-flex
        d-flex
        xs12
      >
        <div
          ref="codeEditor"
          class="editor"
        />

      </v-flex>
    </v-layout>
  </v-container>

  <!--<div>-->
  <!--<div>-->
  <!--Left Menus-->
  <!--</div>-->

  <!--<div-->
  <!--ref="codeEditor"-->
  <!--class="editor"-->
  <!--/>-->
  <!--</div>-->
</template>

<script>
  export default {
    name: "AppContentEdit",
    data: () => ({
      editor: null,
      submitBtnDisabled: true,
      app: {}
    }),
    mounted() {
      this.initEditor()
    },
    methods: {
      initEditor() {
        window.require.config({paths: {'vs': '/monaco-editor/min/vs'}})
        window.require(['vs/editor/editor.main'], () => {
          let e = monaco.editor.create(this.$refs.codeEditor, {
            value: this.app.content,
            theme: 'vs-dark',
            language: 'yaml',
            mouseWheelZoom: true
          })

          e.getModel().updateOptions({tabSize: 2})

          e.onDidChangeModelContent(this.changeContent)
          e.focus()
          this.editor = e
        })
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .editor
    height calc(100vh - 60px - 48px)
    width 100%

  .list-apps
    position fixed
    left -250px
    top 0
    width 250px
    height 100%
    background red
    padding 24px 0
    box-sizing border-box

</style>
