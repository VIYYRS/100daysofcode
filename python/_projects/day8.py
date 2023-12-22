alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
text = input("Type your message:\n").lower()
shift = int(input("Type the shift number:\n"))

def encrypt(plain_text, shift):
    
    if direction == 'encode':
      cipher_text = str('')
      for i in plain_text:
        currentIndex = alphabet.index(i)
        outputIndex = currentIndex + shift
        getText = alphabet[outputIndex]
        cipher_text += getText
      
    elif direction == 'decode':
      cipher_text = str('')
      for i in plain_text:
        currentIndex = alphabet.index(i)
        outputIndex = currentIndex - shift
        getText = alphabet[outputIndex]
        cipher_text += getText
    
    return cipher_text
    
print(encrypt(text, shift))