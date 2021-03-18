<script>
    export let color;

    const colors = {
        green: 'text-green border-green',
        blue: 'text-blue border-blue',
        pink: 'text-pink border-pink',
    };

    $: tagColors = colors[color] || ''
</script>

<span class="py-0.5 px-2 {tagColors} border rounded-xl text-sm font-semibold">
    <slot />
</span>