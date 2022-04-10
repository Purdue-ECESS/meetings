import styles from "./flex.module.sass"

export default function Index() {
    return (
        <div>
            <p>Inline Example</p>
            <div style={{display: "flex", width: "100%", height: 20, margin: 5}}>
                <div style={{flex: 1, backgroundColor: "red"}}/>
                <div style={{flex: 1, backgroundColor: "green"}}/>
                <div style={{flex: 1, backgroundColor: "blue"}}/>
            </div>

            <div style={{display: "flex", width: "100%", height: 20, margin: 5}}>
                <div style={{flex: 2, backgroundColor: "red"}}/>
                <div style={{flex: 1, backgroundColor: "green"}}/>
                <div style={{flex: 1, backgroundColor: "blue"}}/>
            </div>

            <p>SASS Example</p>
            <div className={styles.child}/>
            <div className={styles.parent_div}>
                <div className={styles.child}/>
                <div className={styles.child} style={{backgroundColor: "green"}}/>
                <div className={styles.child} style={{backgroundColor: "blue"}}/>
            </div>

            <p>Inline Example Wrapping Boxes</p>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
                <div style={{margin: 10, height: 200, width: 200, backgroundColor: "pink"}} />
            </div>

            <p>SASS Example Wrapping Boxes</p>
            <div className={styles.parent_box}>
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
            </div>

            <p>A Tip: Spacing items Out</p>
            <div style={{display: "flex"}}>
                <div>Hi there Matthew Wen</div>
                <div style={{flex: 1, backgroundColor: "red", textAlign: "end"}}>
                    Space it Out
                </div>
            </div>
        </div>
    )
}
