import {ref, onMounted, onUnmounted} from 'vue';

export function useActiveSection(sectionIds) {
    const activeSection = ref(sectionIds[0])
    let observer = null

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id
                        history.replaceState(null, '', `#${entry.target.id}`)
                    }
                }
            },
            {threshold: 0.5}
        )

        for (const id of sectionIds) {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        }
    })

    onUnmounted(() => observer?.disconnect())

    return {activeSection}
}
