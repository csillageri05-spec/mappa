import type { AllapotTipus, TodoTipus } from '../adat'
import Feladat from './Feladat'


    interface FeladatProps {
        lista: TodoTipus[],
        setAllapot: (index: number, allapot: AllapotTipus) => void
    }
    function Feladatok({ lista, setAllapot }: FeladatProps) {
        return (
            <div>
                {
                    lista.map((elem, index) => {
                        return (<Feladat elem={elem} setAllapot={setAllapot} index={index} key={index} />
                        )
                    }

                    )
                }

            </div>
        )
    }

    export default Feladatok
