function verify(name) {
    let reverseName = name.split('');
    reverseName = reverseName.reverse();
    reverseName = reverseName.join('');
    if (name === reverseName) {
        return true
    } else 
    
    console.log(reverseName);
}

verify('Joao')