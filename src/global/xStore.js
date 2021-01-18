import { reactive, onMounted } from '@vue/composition-api'


export default function usexStore() {

    const mainURL = 'https://www.scorebat.com/video-api/v1/';

    const xState = reactive({
        data: []

    }) 

    onMounted(() => {
        fetch(mainURL).then(_abc => _abc.json())
            .then(_abc => xState.data = _abc)
    })


    return{
        xState,
        mainURL,
    }
}