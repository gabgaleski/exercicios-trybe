function verify(name) {
    let reverseName = name.split('');
    reverseName = reverseName.reverse();
    reverseName = reverseName.join('');
    if (name === reverseName) {
        console.log('True');
        return true;
    } else {
        console.log('False');
        return false;
    }
    
    console.log(reverseName);
}

verify('arara')