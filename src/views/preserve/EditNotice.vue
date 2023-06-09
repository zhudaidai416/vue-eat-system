<template>
    <div class="box1">
        <PostBox  :dataObj="dataObj" @getDate="getDate"></PostBox>
    </div>
</template>

<script>
import PostBox from "../../components/PlatformVindicate/PostBox.vue";


export default {
    name: "EditNotice",
    components: {
        PostBox,
    },
    data() {
        return {
            id: '',
            dataObj: {}
        }
    },
    mounted() {
        this.id = this.$route.query.id;
        //请求数据
        this.getDetails(this.id)
    },
    methods: {
        /* 自定义事件 */
        getDate(obj) {
            console.log('获取数据object',obj);
        },
        //请求数据
        getDetails(id) {
            this.$axios.post('/platformNotice/selectPlatFormById',{id})
            .then(res => {
                this.dataObj = res.data
                console.log(res.data);
            })
            .catch(err => {
                console.log("err",err);
            })
        }
    }
}



</script>