<script lang="ts">
  import Features from "../components/Features.svelte";
  import Hero from "../components/Hero.svelte";
  import AboutRadicle from "../components/AboutRadicle.svelte";
  import UserTest from "../components/UserTest.svelte";

  let qrcodeVisible = $state(false);
</script>

<Hero bind:qrcodeVisible />
<AboutRadicle />
<Features />
{#if qrcodeVisible}
  <UserTest />
{/if}