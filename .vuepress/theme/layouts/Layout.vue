<template>
  <Common :sidebar="$frontmatter.blog !== true">
    <template
      v-if="$frontmatter.blog && $themeConfig.blog !== false"
      #sidebar-bottom
    >
      <BlogInfo />
    </template>

    <template #default="slotProps">
      <BlogHome v-if="$frontmatter.blog && $themeConfig.blog !== false" />

      <Main v-else-if="$frontmatter.main" />

      <Home v-else-if="$frontmatter.home" />

      <Download v-else-if="$frontmatter.download" />

      <Sponsor v-else-if="$frontmatter.sponsor" />

      <Page
        v-else
        :headers="slotProps.headers"
        :sidebar-items="slotProps.sidebarItems"
      >
        <template #top>
          <slot name="page-top" />
        </template>

        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
    </template>
  </Common>
</template>

<script src="./Layout" />
