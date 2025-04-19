fn array_and_vec() -> ([i32; 4], Vec<i32>) {
    let mut a = [10, 20, 30, 40]; // Array
    let mut v: Vec<i32> = Vec::new();

    // TODO: Create a vector called `v` which contains the exact same elements as in the array `a`.
    // Use the vector macro.
    // let v = ???;

    for elem in a.iter_mut() {
        v.push(*elem);
    }

    (a, v)
}

fn main() {
    // You can optionally experiment here.
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_array_and_vec_similarity() {
        let (a, v) = array_and_vec();
        assert_eq!(a, *v);
    }
}
