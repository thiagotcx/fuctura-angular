import { Subject } from "rxjs"

export interface ApplicationState {
    pageTitle: Subject<string>
    token: string | null
}
