<template>
  <div id="addShop">
       <form>
        <div>
          <label for="">商品名称</label>
          <input
            type="text"
            placeholder="请输入添加商品"
            v-model="shopItem.name"
          />
        </div>
        <div>
          <label for="">商品价格</label>
          <input
            type="text"
            placeholder="请输入商品打哪几"
            v-model="shopItem.price"
          />
        </div>
        <div>
          <button class="submit" @click.prevent="addShopItem">添加商品</button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
     data:function() {
    return {
   
       shopItem: {
            name: "", // 商品名称
            price: "", // 商品价格
          },
          shopList: [], // 表示商品列表  '[Object,Obbjec]'
          flag: false, // true  商品存在；false 商品不存在
    };
  },
   methods: {
          addShopItem() {
            // 检验商品是否存在
            for (let i = 0; i < this.shopList.length; i++) {
              let item = this.shopList[i];
              if (item.name === this.shopItem.name) {
                this.flag = true;
                alert("商品存在不需要重复添加");
                break;
              } else {
                this.flag = false;
              }
            }
            // 没有有该商品
            if (!this.flag) {
              this.shopList.push({
                ...this.shopItem,
                id: new Date().getTime(),
              });
            }
            this.shopItem.name = "";
            this.shopItem.price = "";
          },
        },
        created() {
          var shopListStorage = localStorage.getItem("shopList");
          if (shopListStorage === null) {
            localStorage.setItem("shopList", JSON.stringify(this.shopList));
          } else {
            // 非空 证明存在商品列表字段 --< 给shopllist做初始化处理
            this.shopList = JSON.parse(shopListStorage);
          }
        },
        watch: {
          shopList: function (val) {
            // 最终更新的去重后的结果
            localStorage.setItem("shopList", JSON.stringify(val));
            this.$emit('onShopList',val)
          },
        },
}
</script>

<style>
     
      form {
        width: 300px;
        margin: 0 auto;
        border: 1px solid #ccc;
      }
      form div {
        margin: 10px;
        text-align: center;
      }
      .submit {
        margin-top: 20px;
        outline: none;
        border: none;
        color: #3f3535;
        appearance: none;
        width: 100px;
        height: 25px;
        line-height: 25px;
        background-color: #ccc;
      }
</style>