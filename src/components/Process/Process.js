import { ProcessHero } from "./ProcessHero"
import { ProcessLive } from "./ProcessLive"
import { ProcessVirtual } from "./ProcessVirtual"

export const Process = () => {
    return (
        <div>
            <ProcessHero/>
            <ProcessVirtual/>
            <ProcessLive/>
        </div>
    )
}