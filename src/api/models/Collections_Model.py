class Collection: 
    def __init__(self, name:str, artifactsIds:[], description:str, coverImage:str):
        self.id = name.replace(" ", "-") # Substituir os espaços do titulo por "-"
        self.slug = self.id.lower()
        self.name = name
        self.description = description
        self.artifactsIds = artifactsIds
        self.coverImage = coverImage # Caminho para a imagem