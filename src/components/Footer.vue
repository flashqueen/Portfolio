<template>
    <section class="bottom">
        <div>
            <p class="bottom__header">Danilo Oliveira | 2023</p>
            <img src="cbpk_purple.jpg" alt="" class="contact__img">
        </div>
    </section>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.bottom {
    position: relative;
    margin-top: 5em;
}

.bottom__header {
    font-size: var(--size-xs);
    font-weight: 600;
    color: var(--clr-slate600);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    user-select: none;

    position: relative;
    z-index: 2;
}

.contact__img {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    width: 100%;
    height: 150vh;
    object-fit: cover;

    -webkit-mask-image: linear-gradient(rgb(0 0 0 / 0),
            rgb(0 0 0 / 0.1) 80%,
            rgb(0 0 0 / 0.4));
    mask-image: linear-gradient(rgb(0 0 0 / 0),
            rgb(0 0 0 / 0.1) 80%,
            rgb(0 0 0 / 0.4));
}
</style>