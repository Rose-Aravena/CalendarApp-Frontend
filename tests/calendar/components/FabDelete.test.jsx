import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { FabDelete } from "../../../src/calendar/components/FabDelete"
import { store } from "../../../src/store"

describe('Pruebas en <FabDelete />', () => {

    test('debe de mostrar el componente correctamente', () => {

        render(
            <Provider store={store}>
                <FabDelete />
            </Provider>)
    })
})