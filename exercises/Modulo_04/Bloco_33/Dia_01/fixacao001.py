class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


meu_user = User("Marcelo Leite", "marsleite@gmail.com", "123456212")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)