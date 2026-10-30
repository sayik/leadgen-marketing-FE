<script setup lang="ts">
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'
const open = ref(false)
const links = [{ label: 'What we do', href: '#what-we-do' }, { label: 'How it works', href: '#how-it-works' }, { label: 'Who it helps', href: '#who-it-helps' }, { label: 'Contact', href: '#contact' }]
const close = () => { open.value = false }
</script>
<template>
  <header class="site-header">
    <div class="nav-shell container">
      <NuxtLink to="/" class="brand" aria-label="Leadgen home" @click="close">
        <span class="brand-mark"><i></i><i></i><i></i></span><span>leadgen<span class="brand-period">.</span></span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
      <a class="nav-cta" href="#contact">Let's talk <ArrowUpRight :size="15" /></a>
      <button class="mobile-toggle" :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open"><X v-if="open" :size="22"/><Menu v-else :size="22"/></button>
    </div>
    <nav v-if="open" class="mobile-nav container" aria-label="Mobile navigation">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="close">{{ link.label }}</a>
      <a href="#contact" class="mobile-nav-cta" @click="close">Talk to our team <ArrowUpRight :size="15"/></a>
    </nav>
  </header>
</template>
<style scoped>
.site-header{position:sticky;top:0;z-index:30;padding:12px 0;background:rgba(245,242,235,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(23,37,34,.08)}
.nav-shell{height:56px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:10px;font:800 23px Manrope,sans-serif;letter-spacing:-1.5px}.brand-period{color:#b89558}.brand-mark{display:flex;align-items:flex-end;gap:3px;height:21px}.brand-mark i{display:block;width:5px;background:#203b35;transform:skew(-16deg)}.brand-mark i:nth-child(1){height:10px}.brand-mark i:nth-child(2){height:18px}.brand-mark i:nth-child(3){height:15px}
.desktop-nav{display:flex;align-items:center;gap:clamp(18px,3vw,42px)}.desktop-nav a{font-size:12px;font-weight:600;color:#49534d;transition:color .2s}.desktop-nav a:hover{color:#b89558}.nav-cta{display:flex;align-items:center;gap:8px;padding:12px 16px;border-radius:6px;background:#203b35;color:#f5f2eb;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.mobile-toggle,.mobile-nav{display:none}
@media(max-width:760px){.site-header{padding:8px 0}.nav-shell{height:48px}.desktop-nav,.nav-cta{display:none}.mobile-toggle{display:grid;place-items:center;width:42px;height:42px;border:1px solid #d9d5ca;border-radius:6px;background:transparent;color:#172522}.mobile-nav{display:flex;flex-direction:column;gap:0;padding:10px 0 16px}.mobile-nav a{padding:13px 4px;border-top:1px solid #e5dfd4;font-size:14px;font-weight:600}.mobile-nav .mobile-nav-cta{display:flex;align-items:center;gap:8px;color:#8b6b35}}
</style>
