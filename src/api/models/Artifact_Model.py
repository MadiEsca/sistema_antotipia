# Criação do modelo de um artifact

class Artifact: 
    def __init__(self, title:str, category:str, description:str, tags:[]):
        self.id = title.replace(" ", "-") # Substituir os espaços do titulo por "-"
        self.slug = self.id.lower()
        self.title = title
        self.category = category
        self.description = description
        self.collectionsIds = []
        self.tags = []

#category: "Interfaces",
#year: 2022,
#description: "A speculative UI system designed for environments where light is a liability — total chromatic restraint.",
#longDescription: "Obsidian Interface is a design study for screen environments where conventional interfaces fail: high-stakes low-light operations, sensory-critical workflows, and contexts demanding absolute visual discipline.\n\nEvery element is stripped to its functional minimum. Color is reserved for state change alone. Typography becomes the primary structural element. The system demonstrates that usability and invisibility are not in opposition — the best interface is the one that disappears.",
#tags: ["ui", "dark", "speculative", "design-systems"],
#coverImage: "/images/artifacts/obsidian-interface.svg",
#featured: true,
#collectionIds: ["forgotten-interfaces", "machine-aesthetics"],
#status: "available",
#medium: "Interface design",
#dimensions: "1920 × 1080 px",