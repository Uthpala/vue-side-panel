<template>
  <transition name="slide-fade">
    <div class="side-panel-mask">
      <div class="side-panel">
          <slot name="header">
            default header
          </slot>
          <div class="side-panel-body">
            <slot name="body">
              default body
            </slot>
          </div>
          <div class="side-panel-footer">
            <slot name="footer">
            </slot>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SidePanel'
}
</script>

<style>
  .side-panel-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    display: table;
  }
  .side-panel {
    position: fixed;
    top:0px;
    right:0px;
    height: 100%;
    background-color: white;
    width:40%;
  }
  header{
    background-color: #f5f5f5;
    text-align: center;
    padding:10px;
  }
  .back-button{
    float:left;
    padding:10px;
    margin-top:-10px;
    font-size: 46px;
  }
  .close-button{
    float:left;
    padding:10px;
    margin-left:-60px;
    margin-top:-10px;
    font-size: 30px;
  }
</style>
