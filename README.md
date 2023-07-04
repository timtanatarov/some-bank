# A-Tink

-   [Правила работы с git](#git)
-   [Структура проекта](#structure)
-   [Стандарты разработки](#standards)

# Правила работы с git <a id="git" name="git"></a>

Разработка задач и исправление багов введутся в отдельных ветках.\
Для обычных задач и багов откалываться от ветки **dev**.\

## Наименование веток

-   feat/{id задачи}/{информативное название ветки} - для новых фич
-   bugfix/{id задачи}/{информативное название ветки} - для исправления багов

В названии ветки для пробелов использовать «\_»\
Пример: feat/ALFAID-551/add_new_libs

## Коммиты

Сообщение для коммита пишется по следующему шаблону:\
{Тип коммита}: {описание коммита}

Пример: feat: add ui-bootstrap.js dependency

### Типы коммитов

-   feat - добавление новой функциональности
-   fix - исправлении багов
-   refactor - рефакторинг кода
-   test - все что связанно с тестами

## Merge requests

После выполнения задачи в отдельной ветке необходимо сделать "Запрос на слияние" (merge request) в ветку dev\
В описании к мр-у необходимо указать, какие изменения он в себе несет

### Условия для успешного мержа вашего мр-а:
- Успешный pipline
- Git конфликты отсутствуют
- Все треды закрыты
- Аппрув минимум от одного человека из команды фронтенд разработки
- Аппрув от техлида

# Структура проекта <a id="structure" name="structure"></a>

### Пример:

```
src
├── сomponents
│   ├── ClientsPage
│   │    ├── index.tsx      // Код компонента ClientsPage
│   │    ├── Search.tsx
│   │    └── Table
│   │        ├── index.tsx
│   │        ├── Head.tsx
│   │        └── Body.tsx
│   └── ClientCreatePage
│       ├── index.tsx
│       ├── constants.ts    // Константные значения для компонента CreateClientPage
│       └── utils.ts        // Функции для компонента CreateClientPage
│
├── shared                  // Переиспользуемые компоненты
│   ├── icons
│   │   ├── Close.tsx
│   │   └── Phone.tsx
│   ├── Avatar.tsx
│   ├── Input.tsx
│   └── Button.tsx
|
├── constants               // Глобальные константые значения
├── images
├── services
├── redux
├── utils                   // Общие вспомогательные функции
├── hooks
│
```

---

# Стандарты разработки <a id="standards" name="standards"></a>

## Общие правила наименований:

#### Названия файлов и папок должны быть уникальными относительно их родительской папки

❌ Примеры **неправильного** кода для этого правила:

```
components
├──Users
│  ├──index.tsx
│  ├──UsersTable.tsx
│  └──UsersFilters.tsx
├──utils
│  └──sortUtil.ts
```

✅ Примеры **правильного** кода для этого правила:

```
components
├──Users
│  ├──index.tsx
│  ├──Table.tsx
│  └──Filters.tsx
├──utils
│  └──sort.ts
```

---

#### Названия компонент должны быть уникальными относительно всего проекта

❌ Примеры **неправильного** кода для этого правила:

```tsx
  // ./components/Users/Table.tsx

  export const Table = (props) => ...
```

✅ Примеры **правильного** кода для этого правила:

```tsx
  // ./components/Users/Table.tsx

  export const UsersTable = (props) => ...
```

## Наименование обработчиков

-   Функии обработчики должны называться по типу `handleClick`
-   Свойства (props) принимающие обработчики должны называться по типу `onClick`

**Пример:**

```tsx
  type ConfirmModalProps = {
    isOpen: boolean;
    onConfirm: () => {} // Свойство принимающее обработчик
    onCancel: () => {} // Свойство принимающее обработчик
  }

  const ConfirmModal: FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel }) => {
    return (
      <Modal isOpen={isOpen}>
        {/* Some code */}
        <Button onClick={onConfirm}>Confirm</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Modal>
    )
  }

  const MyComponent = () => {
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

    // Функции обработчики
    const handleConfirm = () => { /* Some code */ };
    const handleCancel = () => { /* Some code */ };

    return (
      <div>
        {/* Some code */}
        <ConfirmModal
          isOpen={isOpenConfirmModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        >
      </div>
    )
  }
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
