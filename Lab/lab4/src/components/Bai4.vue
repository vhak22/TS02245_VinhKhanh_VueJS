<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <br>    
        <div class="row">
            <div class="col-sm-3">
                <div class="card">
                    <img :src="items[0].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[0].title }}</h3>
                        <p class="card-text">{{ items[0].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img :src="items[1].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[1].title }}</h3>
                        <p class="card-text">{{ items[1].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img :src="items[2].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[2].title }}</h3>
                        <p class="card-text">{{ items[2].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <img :src="items[3].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[3].title }}</h3>
                        <p class="card-text">{{ items[3].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm-4">
                <div class="card">
                    <img :src="items[4].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[4].title }}</h3>
                        <p class="card-text">{{ items[4].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <img :src="items[5].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[5].title }}</h3>
                        <p class="card-text">{{ items[5].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <img :src="items[6].image" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ items[6].title }}</h3>
                        <p class="card-text">{{ items[6].content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

const items = [
    {
        title: "Khám phá Công nghệ AI năm 2026",
        content: "Trí tuệ nhân tạo đang thay đổi cách chúng ta làm việc và sáng tạo mỗi ngày với những bước tiến vượt bậc.",
        image: "https://picsum.photos/400/200"
    },
    {
        title: "Du lịch bền vững lên ngôi",
        content: "Xu hướng du lịch thân thiện với môi trường đang trở thành lựa chọn hàng đầu của giới trẻ trong năm nay.",
        image: "https://picsum.photos/400/202"
    },
    {
        title: "Bí quyết sống khỏe mỗi ngày",
        content: "Chế độ ăn uống cân bằng và việc tập luyện đều đặn là chìa khóa để duy trì năng lượng tích cực.",
        image: "https://picsum.photos/400/201"
    },
    {
        title: "Bí quyết sống khỏe mỗi ngày",
        content: "Chế độ ăn uống cân bằng và việc tập luyện đều đặn là chìa khóa để duy trì năng lượng tích cực.",
        image: "https://picsum.photos/400/211"
    },
    {
        title: "Bí quyết sống khỏe mỗi ngày",
        content: "Chế độ ăn uống cân bằng và việc tập luyện đều đặn là chìa khóa để duy trì năng lượng tích cực.",
        image: "https://picsum.photos/400/221"
    },
    {
        title: "Bí quyết sống khỏe mỗi ngày",
        content: "Chế độ ăn uống cân bằng và việc tập luyện đều đặn là chìa khóa để duy trì năng lượng tích cực.",
        image: "https://picsum.photos/400/251"
    }
];

</script>

<style lang="">

</style>
