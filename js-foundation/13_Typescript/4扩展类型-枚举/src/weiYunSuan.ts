enum Permission {
    read = 1,   // 0001
    write = 2,  // 0010
    create = 4, // 0100
    delete = 8  // 1000
}

// 如何组合权限( 使用位运算的( **或运算** )来组合权限 )
let p:Permission = Permission.read | Permission.write;

// 如何判断是否拥有权限
function hasPermission(target:Permission, per:Permission) {
    return (target & per) === per;
}

// 如何删除写权限
p ^ Permission.write
// 如何删除读权限
p ^ Permission.read
// 如何删除可创建权限
p ^ Permission.create
// 如何删除可删除权限
p ^ Permission.delete

// 判断是否拥有写权限
hasPermission(p, Permission.write);
// 判断是否拥有读权限
hasPermission(p, Permission.read);
// 判断是否拥有创建权限
hasPermission(p, Permission.create);
// 判断是否拥有删除权限
hasPermission(p, Permission.delete);