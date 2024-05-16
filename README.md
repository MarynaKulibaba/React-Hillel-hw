**ДЗ 96. Component.jsx**

Реалізуйте компонент, який являє собою дві кнопки та лог подій:

Лог - це список значень, кожне з яких отримується після натискання на одну з двох кнопок. Знизу знаходяться старіші події, зверху нові.
Ліва кнопка + додає в лог рядок із новим значенням, що дорівнює: значення «найновішого існуючого запису лога» + 1
Права кнопка - додає в лог рядок із новим значенням, що дорівнює: значення «найновішого існуючого запису лога» - 1
У разі натискання на запис у балці він видаляється.

Початковий HTML - 

```
<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
</div>
```

Після натискання послідовності  +, +, +, -, +: 
```
<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
  </div>
</div>
```
Кожне натискання кнопки додає в лог новий рядок зверху.

