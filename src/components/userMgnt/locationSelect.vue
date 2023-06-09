<template>
    <div class="locationSelect">
        <el-form-item label="所在地">
            <el-cascader v-model="selectedLocation" :options="selectOptions" @change="locationConfirm"></el-cascader>
        </el-form-item>
    </div>
</template>

<script>
export default {
    name:"locationSelect",
    data() {
        return {
            selectedLocation: [],
            selectOptions: [
                {
                    value: 'Philippine',
                    label: '菲律宾',
                    children: [
                        {
                            value: 'MetroManila',
                            label: '马尼拉大都会',
                            children: [
                                {
                                    value: 'Kalukan',
                                    label: '卡鲁坎'
                                },
                                {
                                    value: 'LasPinas',
                                    label: '拉斯皮纳斯'
                                },
                                {
                                    value: 'Makati',
                                    label: '马卡蒂'
                                },
                                {
                                    value: 'Marabang',
                                    label: '马拉邦'
                                },
                                {
                                    value: 'Mandaluyong',
                                    label: '曼达鲁永'
                                },
                                {
                                    value: 'Manila',
                                    label: '马尼拉'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'Beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'Dongcheng',
                            label: '东城'
                        },
                        {
                            value: 'Xicheng',
                            label: '西城'
                        },
                        {
                            value: 'Chongwen',
                            label: '崇文'
                        },
                        {
                            value: 'Xuanwu',
                            label: '宣武'
                        },
                        {
                            value: 'Chaoyang',
                            label: '朝阳'
                        }
                    ]
                },
                {
                    value: 'Hebei',
                    label: '河北',
                    children: [
                        {
                            value: 'Shijiazhuang',
                            label: '石家庄',
                            children: [
                                {
                                    value: 'qu1',
                                    label: '区县一'
                                },
                                {
                                    value: 'qu2',
                                    label: '区县二'
                                },
                                {
                                    value: 'qu3',
                                    label: '区县三'
                                },
                                {
                                    value: 'qu4',
                                    label: '区县四'
                                },
                                {
                                    value: 'qu5',
                                    label: '区县五'
                                },
                            ]
                        },
                        {
                            value: 'Tangshan',
                            label: '唐山',
                            children: [
                                {
                                    value: 'qu1',
                                    label: '区县一'
                                },
                                {
                                    value: 'qu2',
                                    label: '区县二'
                                },
                                {
                                    value: 'qu3',
                                    label: '区县三'
                                },
                                {
                                    value: 'qu4',
                                    label: '区县四'
                                },
                                {
                                    value: 'qu5',
                                    label: '区县五'
                                },
                            ]
                        },
                        {
                            value: 'Qinhuangdao',
                            label: '秦皇岛',
                            children: [
                                {
                                    value: 'qu1',
                                    label: '区县一'
                                },
                                {
                                    value: 'qu2',
                                    label: '区县二'
                                },
                                {
                                    value: 'qu3',
                                    label: '区县三'
                                },
                                {
                                    value: 'qu4',
                                    label: '区县四'
                                },
                                {
                                    value: 'qu5',
                                    label: '区县五'
                                },
                            ]
                        },
                        {
                            value: 'Handan',
                            label: '邯郸',
                            children: [
                                {
                                    value: 'qu1',
                                    label: '区县一'
                                },
                                {
                                    value: 'qu2',
                                    label: '区县二'
                                },
                                {
                                    value: 'qu3',
                                    label: '区县三'
                                },
                                {
                                    value: 'qu4',
                                    label: '区县四'
                                },
                                {
                                    value: 'qu5',
                                    label: '区县五'
                                },
                            ]
                        },
                        {
                            value: 'Baoding',
                            label: '保定',
                            children: [
                                {
                                    value: 'qu1',
                                    label: '区县一'
                                },
                                {
                                    value: 'qu2',
                                    label: '区县二'
                                },
                                {
                                    value: 'qu3',
                                    label: '区县三'
                                },
                                {
                                    value: 'qu4',
                                    label: '区县四'
                                },
                                {
                                    value: 'qu5',
                                    label: '区县五'
                                },
                            ]
                        }
                    ]
                }
            ],
        }
    },
    methods: {
        // 所在地选择
        locationConfirm(value) {
            console.log(value)
        }
    }
}
</script>