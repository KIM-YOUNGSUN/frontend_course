---
date: 2021-12-29 Wednesday
---

# TIL

> **κ°μΈ κ³΅λΆ**
<br />

# javascriptπ¦

## **κ°μ²΄μ§ν₯_μμ±μ & new**
- κ°μ²΄λ? μλ‘ μ°κ΄λ λ³μμ ν¨μλ₯Ό κ·Έλ£Ήνν κ·Έλ¦
  - κ°μ²΄ λ΄μ λ³μλ νλ‘νΌν°(property)
  - κ°μ²΄ λ΄μ ν¨μλ λ©μλ(method)

- `μμ±μ`
  - κ°μ²΄λ₯Ό λ§λλ μ­ν μ νλ ν¨μ
  - newλ₯Ό λΆμ΄κ³  μΌλ°ν¨μμ κ΅¬λΆμ μν΄ μ²«κΈμλ₯Ό λλ¬Έμλ‘ νμ

  ```js
  // μμ±μ ν¨μ μ¬μ© μ  =====================================
  function Person(){}
  var p1 = new Person();
  p1.name = 'egoing';
  p1.introduce = function(){
      return 'My name is '+this.name; 
  }
  document.write(p1.introduce()+"<br />");
  
  var p2 = new Person();
  p2.name = 'leezche';
  p2.introduce = function(){
      return 'My name is '+this.name; 
  }
  document.write(p2.introduce());

  // μμ±μ ν¨μ μ¬μ© ν =====================================
  function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
  }
  var p1 = new Person('egoing');
  document.write(p1.introduce()+"<br />");
  
  var p2 = new Person('leezche');
  document.write(p2.introduce());
  // μμ±μ λ΄μμ μ΄ κ°μ²΄μ νλ‘νΌν°λ₯Ό μ μν¨ μ΄λ¬ν μμμ μ΄κΈ°νλΌκ³  ν¨
  // μ½λμ μ¬μ¬μ©μ±μ΄ λμμ§
  ```

<details>
<summary>CLICK ME!</summary>  

- 
</detials>  
